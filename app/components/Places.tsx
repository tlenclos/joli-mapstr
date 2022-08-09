import { SimpleGrid } from "@chakra-ui/react";
import Place from "~/components/Place";
import { ContributedPlace } from "~/lib/fetchPlaces";

interface Props {
  data: ContributedPlace[];
}

const Places = ({ data: places }: Props) => {
  return (
    <SimpleGrid columns={[1, 1, 3]} spacing={6}>
      {places.map((place) => <Place data={place} key={place.id} />)}
    </SimpleGrid>
  );
};

export default Places;
