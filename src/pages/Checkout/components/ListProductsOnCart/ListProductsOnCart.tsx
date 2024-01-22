import { CartContext } from "@src/context/cart-context";
import * as ListProductsOnCartStyles from "./styles";
import { useContext } from "react";
import { ProductCardOnCart } from "./components/ProductCardOnCart/ProductCardOnCart";
import { FlexBox } from "@src/components";

export const ListProductsOnCart = () => {
  const {
    cart: { products },
  } = useContext(CartContext);

  return (
    <ListProductsOnCartStyles.Container
      align="center"
      justify="center"
      direction="column"
      gap="xxs"
    >
      {products.map((product) => (
        <FlexBox align="center" justify="center" direction="row" gap="xxs">
          <ProductCardOnCart key={product.id} product={product} />
          <ListProductsOnCartStyles.RemoveButton>
            remove
          </ListProductsOnCartStyles.RemoveButton>
        </FlexBox>
      ))}
    </ListProductsOnCartStyles.Container>
  );
};
