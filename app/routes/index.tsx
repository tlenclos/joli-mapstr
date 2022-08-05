import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Places from "~/components/Places";
import placesData from "~/data/places.json";
import googleMapClient from "~/lib/googleMapClient";
import { Place } from "~/lib/googleMapSdk";

type GroupedPlaces = {
  "🍔": Place[];
  "🏊": Place[];
  "🍻": Place[];
};

async function fetchPlaceIds(ids: string[]) {
  return (
    await Promise.all(
      ids.map((id) =>
        googleMapClient.maps.placeDetails({
          place_id: id,
          // @ts-ignore
          key: process.env.GOOGLE_API_KEY,
        })
      )
    )
  )
    .map((response) => {
      console.log("request", response.request.path);
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
  let places: GroupedPlaces = {
    "🍔": [],
    "🍻": [],
    "🏊": [],
  };
  let error = false;

  // TODO Add cache system
  // In production https://www.npmjs.com/package/lru-cache
  // In dev filesystem
  try {
    await Promise.all(
      ["🍔", "🍻", "🏊"].map(async (category) => {
        places[category as keyof GroupedPlaces] = await fetchPlaceIds(
          // @ts-ignore
          placesData[category].map((placeData) => placeData.id)
        );
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
  console.log(data);

  return (
    <Container maxW={"7xl"} pt={6}>
      <Heading>Joli Mapstr</Heading>
      {data.error ? (
        <p>Erreur 💥</p>
      ) : (
        <Tabs pt={6}>
          <TabList>
            <Tab>Bouffe 🍔</Tab>
            <Tab>Bar 🍻</Tab>
            <Tab>Piscines 🏊</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={0} pt={2}>
              <Places data={data.places["🍔"]} />
            </TabPanel>
            <TabPanel p={0} pt={2}>
              <Places data={data.places["🍻"]} />
            </TabPanel>
            <TabPanel p={0} pt={2}>
              <Places data={data.places["🏊"]} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </Container>
  );
}
