import { CartContext } from "@src/context/cart-context";
import * as ListProductsOnCartStyles from "./styles";
import { useContext } from "react";

export const ListProductsOnCart = () => {
  const {
    cart: { products },
  } = useContext(CartContext);

  return (
    <ListProductsOnCartStyles.Container
      align="center"
      justify="center"
      direction="column"
    ></ListProductsOnCartStyles.Container>
  );
};
