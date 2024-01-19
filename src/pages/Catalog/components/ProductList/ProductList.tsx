import { useContext, useEffect } from "react";
import * as ProductListStyles from "./styles";
import { ProductContext } from "@src/context/product-context";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductList = () => {
  const { fetchProducts, products } = useContext(ProductContext);

  const hasProducts = products.length > 0;
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductListStyles.ListContainer>
      {hasProducts &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </ProductListStyles.ListContainer>
  );
};
