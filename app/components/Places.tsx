import { SimpleGrid, VStack } from "@chakra-ui/react";
import { intersection } from "lodash";
import Place from "~/components/Place";
import type { Place as PlaceType } from "~/lib/fetchPlaces";
import Filters from "./Filters";
import { useSearchParams } from "@remix-run/react";

interface Props {
  data: PlaceType[];
}

const getPlaceTag = (place: PlaceType) => {
  const tags = place.categories || [];

  // if (place.onPremise) {
  //   tags.push("Sur place");
  // }
  // if (place.takeaway) {
  //   tags.push("À emporter");
  // }

  return tags;
};

const Places = ({ data: places }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = searchParams.getAll("filters") || [];
  const setFilters = (filters: string[]) => setSearchParams({ filters });
  const toggleFilter = (filter: string) =>
    setFilters(
      filters.includes(filter)
        ? filters.filter((currentFilter) => filter !== currentFilter)
        : [...filters, filter]
    );
  const filteredPlaces = places.filter((place) =>
    filters.length > 0
      ? intersection(getPlaceTag(place), filters).length > 0
      : true
  );

  return (
    <VStack>
      <Filters filters={filters} toggleFilter={toggleFilter} />
      <SimpleGrid columns={[1, 1, 3]} spacing={6}>
        {filteredPlaces.map((place) => (
          <Place data={place} key={place.url} toggleFilter={toggleFilter} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Places;
