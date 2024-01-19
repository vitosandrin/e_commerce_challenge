import { useContext, useEffect } from "react";
import * as ProductListStyles from "./styles";
import { ProductContext } from "@src/context/product-context";

export const ProductList = () => {
  const { fetchProducts, products } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductListStyles.ListContainer
      align="center"
      justify="center"
      direction="row"
      wrap="wrap"
    >
      <h1>{products.length > 0 && products[0].title}</h1>
    </ProductListStyles.ListContainer>
  );
};
