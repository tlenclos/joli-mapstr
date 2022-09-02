import { Tag, Wrap, WrapItem } from "@chakra-ui/react";

type Props = {
  filters: string[];
  toggleFilter: (filter: string) => void;
};

const Filters = ({ filters, toggleFilter }: Props) => {
  return (
    <Wrap direction="row" spacing={4} pt={2}>
      {filters.map((filter) => (
        <WrapItem key={filter}>
          <Tag
            onClick={() => toggleFilter(filter)}
            _hover={{ cursor: "pointer" }}
          >
            {filter}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Filters;
