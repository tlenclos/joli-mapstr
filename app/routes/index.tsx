import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Button,
  Container,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { sortBy } from "lodash";
import Places from "~/components/Places";
import placesData from "~/data/places.json";
import googleMapClient from "~/lib/googleMapClient";
import { Place as GooglePlace } from "~/lib/googleMapSdk";
import { distanceFromOffice, timeByFoot } from "~/lib/distance";

export type ContributedPlace = {
  id: string;
  name: string;
  url?: string;
  tags?: string[];
  distance?: number; // in meters
  timeByFoot?: number; // in seconds
  googleData?: GooglePlace;
};

export type GroupedPlaces = Array<{
  name: string;
  places: ContributedPlace[];
}>;

async function fetchPlacesIds(ids: string[]) {
  return (
    await Promise.all(
      ids.map((id) =>
        googleMapClient.maps.placeDetails({
          place_id: id,
          // @ts-ignore
          key: process.env.GOOGLE_API_KEY,
          language: "fr",
        })
      )
    )
  )
    .map((response) => {
      return response.data.result;
    })
    .sort((place1, place2) =>
      place1.opening_hours?.open_now! > place2.opening_hours?.open_now! ? -1 : 1
    );
}

export function headers() {
  return {
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export async function loader(args: LoaderArgs) {
  let places: GroupedPlaces = [];
  let error = false;

  // TODO Add cache system
  // In production https://www.npmjs.com/package/lru-cache
  // In dev filesystem
  try {
    await Promise.all(
      placesData.map(async (category, index) => {
        places[index] = {
          name: category.name,
          places: await fetchPlacesIds(
            category.places.map((placeData) => placeData.id)
          ).then((googlePlaces) => {
            return sortBy<ContributedPlace>(
              category.places.map((place) => {
                const googleData = googlePlaces.find(
                  (googlePlace) => googlePlace.place_id === place.id
                );
                const distance =
                  googleData?.geometry?.location &&
                  distanceFromOffice({
                    latitude: googleData?.geometry.location.lat,
                    longitude: googleData?.geometry.location.lng,
                  });

                return {
                  ...place,
                  distance,
                  timeByFoot: distance && timeByFoot(distance),
                  googleData,
                };
              }),
              (item) => {
                return [
                  !item.googleData?.opening_hours?.open_now,
                  item.distance,
                ];
              }
            );
          }),
        };
      })
    );
  } catch (e) {
    console.error(e);
    error = true;
  }

  return json({ error, places });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <Container maxW={"7xl"} pt={6}>
      <HStack justifyContent="space-between">
        <Heading>Joli Mapstr</Heading>
        <Button
          as="a"
          href="https://github.com/tlenclos/joli-mapstr/blob/master/app/data/places.json"
        >
          Éditer
        </Button>
      </HStack>
      {data.error ? (
        <p>Erreur 💥</p>
      ) : (
        <Tabs pt={6}>
          <TabList>
            {data.places.map((category) => (
              <Tab key={category.name}>{category.name}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.places.map((category) => (
              <TabPanel p={0} pt={2} key={category.name}>
                <Places data={category.places} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </Container>
  );
}
