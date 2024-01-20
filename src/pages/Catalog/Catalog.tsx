import { FlexBox, Text } from "@src/components";
import { ProductList } from "./components/ProductList/ProductList";

export const Catalog = () => {
  return (
    <FlexBox align="center" justify="center" direction="column">
      <Text size="small" color={1} weight={700}>
        This is a FAKE store. Don't buy anything here. (or do it, I don't care)
      </Text>
      <ProductList />
    </FlexBox>
  );
};
