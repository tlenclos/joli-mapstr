import { SimpleGrid } from "@chakra-ui/react";
import Place from "~/components/Place";
import { Place as PlaceType } from "~/lib/googleMapSdk";

interface Props {
  data: PlaceType[];
}

const Places = ({ data }: Props) => {
  console.log(data);
  return (
    <SimpleGrid columns={3} spacing={8}>
      {data.map((place) => (place ? <Place data={place} /> : null))}
    </SimpleGrid>
  );
};

export default Places;
