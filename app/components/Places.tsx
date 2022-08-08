import { SimpleGrid } from "@chakra-ui/react";
import Place from "~/components/Place";
import { ContributedPlace } from "~/routes";

interface Props {
  data: ContributedPlace[];
}

const Places = ({ data }: Props) => {
  return (
    <SimpleGrid columns={3} spacing={8}>
      {data.map((place) => (place ? <Place data={place} /> : null))}
    </SimpleGrid>
  );
};

export default Places;
