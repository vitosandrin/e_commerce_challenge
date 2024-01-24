import { FlexBox, Text } from "@src/components";
import { ProductList } from "./components/ProductList/ProductList";
import { Filter } from "./components/Filter/Filter";

export const Catalog = () => {
  return (
    <FlexBox align="center" justify="center" direction="column">
      <Text size="sm" color={1} weight={700}>
        This is a FAKE store. Don't buy anything here. (or do it, I don't care)
      </Text>
      <Filter />
      <ProductList />
    </FlexBox>
  );
};
