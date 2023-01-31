import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import navigationSwiperCss from "node_modules/swiper/modules/navigation/navigation.min.css";
import thumbsSwiperCss from "node_modules/swiper/modules/thumbs/thumbs.min.css";
import zoomSwiperCss from "node_modules/swiper/modules/zoom/zoom.min.css";
import swiperCss from "node_modules/swiper/swiper.min.css";

import Places from "~/components/Places";
import fetchPlaces, { GroupedPlaces } from "~/lib/fetchPlaces";

export function headers() {
  if (process.env.NODE_ENV !== "development") {
    return {
      "Cache-Control": "max-age=300, s-maxage=3600",
    };
  }
}

export const links = () => {
  return [
    { rel: "stylesheet", href: swiperCss },
    { rel: "stylesheet", href: navigationSwiperCss },
    { rel: "stylesheet", href: zoomSwiperCss },
    { rel: "stylesheet", href: thumbsSwiperCss },
  ];
};

export async function loader({ request }: LoaderArgs) {
  let places: GroupedPlaces = [];
  let error = false;
  const url = new URL(request.url);
  const date = url.searchParams.has("date")
    ? new Date(url.searchParams.get("date")!)
    : undefined;

  try {
    places = fetchPlaces(date);
  } catch (e) {
    console.error(e);
    error = true;
  }

  return json({ error, places });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = data.places.map((category) => category.name);
  const tab = searchParams.has("tab")
    ? searchParams.get("tab")!
    : categories[0];

  return (
    <Container maxW={"7xl"} pt={6}>
      <HStack justifyContent="space-between">
        <Heading>Joli Mapstr</Heading>
        <HStack>
          <Button
            as="a"
            href="https://github.com/tlenclos/joli-mapstr/edit/master/data/places.json"
          >
            Ajouter un lieu
          </Button>
          <Input
            type="datetime-local"
            value={searchParams.get("date") || ""}
            onChange={(e) =>
              setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                date: e.target.value,
              })
            }
            maxW={64}
          />
        </HStack>
      </HStack>
      {data.error ? (
        <p>Erreur 💥</p>
      ) : (
        <Tabs
          pt={6}
          index={categories.indexOf(tab)}
          onChange={(index) =>
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              tab: categories[index],
            })
          }
        >
          <TabList>
            {data.places.map((category) => (
              <Tab key={category.name}>{category.name}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.places.map((category) => (
              <TabPanel p={0} pb={8} key={category.name}>
                <Places data={category.places} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </Container>
  );
}
