import { FlexBox, Text } from "@src/components";
import { ProductList } from "./components/ProductList/ProductList";

export const Catalog = () => {
  return (
    <FlexBox align="center" justify="center" direction="column">
      <Text size="large" color={1} weight={700}>
        Catalog
      </Text>
      <ProductList />
    </FlexBox>
  );
};
