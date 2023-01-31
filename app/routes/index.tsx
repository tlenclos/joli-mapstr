import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Input,
  keyframes,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  chakra,
} from "@chakra-ui/react";
import { json, LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import navigationSwiperCss from "node_modules/swiper/modules/navigation/navigation.min.css";
import thumbsSwiperCss from "node_modules/swiper/modules/thumbs/thumbs.min.css";
import zoomSwiperCss from "node_modules/swiper/modules/zoom/zoom.min.css";
import swiperCss from "node_modules/swiper/swiper.min.css";
import { useState } from "react";
import { FaDiceThree } from "react-icons/fa";

import Places from "~/components/Places";
import fetchPlaces, { GroupedPlaces } from "~/lib/fetchPlaces";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

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
  const [isRollingDice, setIsRollingDice] = useState(false);

  const onChangeTab = (index: number) =>
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      tab: categories[index],
    });

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("date", e.target.value);
    setSearchParams(searchParams);
  };

  const findRandomPlace = () => {
    setIsRollingDice(true);
    setTimeout(() => {
      setIsRollingDice(false);
      const places = data.places
        .find((category) => category.name === tab)
        ?.places!.filter((place) => place.isOpen)!;
      searchParams.set(
        "place",
        places[Math.floor(Math.random() * places.length)].placeId
      );
      setSearchParams(searchParams);
    }, 1000);
  };

  const reset = () => {
    searchParams.delete("date");
    searchParams.delete("place");
    setSearchParams(searchParams);
  };
  const selectedPlace = searchParams.get("place");
  const showResetButton = searchParams.get("place") || searchParams.get("date");

  return (
    <Container maxW={"7xl"} pt={6}>
      <HStack justifyContent="space-between">
        <Link to="/">
          <Heading>Joli Mapstr</Heading>
        </Link>
        <HStack>
          <IconButton
            aria-label="Trouver un lieu aléatoirement"
            icon={
              <chakra.div
                __css={
                  isRollingDice
                    ? { animation: `${spin} 1s linear infinite}}` }
                    : undefined
                }
              >
                <FaDiceThree />
              </chakra.div>
            }
            onClick={findRandomPlace}
            disabled={isRollingDice}
          />
          <Button
            as="a"
            href="https://github.com/tlenclos/joli-mapstr/edit/master/data/places.json"
          >
            Ajouter un lieu
          </Button>
          <Input
            type="datetime-local"
            value={searchParams.get("date") || ""}
            onChange={onChangeDate}
            maxW={64}
          />
          {showResetButton && (
            <IconButton
              aria-label="Réinitialiser les filtres"
              icon={<CloseIcon />}
              onClick={reset}
            />
          )}
        </HStack>
      </HStack>
      {data.error ? (
        <p>Erreur 💥</p>
      ) : (
        <Tabs pt={6} index={categories.indexOf(tab)} onChange={onChangeTab}>
          <TabList>
            {data.places.map((category) => (
              <Tab key={category.name}>{category.name}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.places.map((category) => (
              <TabPanel p={0} pb={8} key={category.name}>
                <Places data={category.places} selectedPlace={selectedPlace} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </Container>
  );
}
