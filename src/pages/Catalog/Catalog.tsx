import { FlexBox } from "@src/components";
import { ProductList } from "./components/ProductList/ProductList";
import { Filter } from "./components/Filter/Filter";

export const Catalog = () => {
  return (
    <FlexBox align="flex-start" justify="center" direction="row">
      <Filter />
      <ProductList />
    </FlexBox>
  );
};
