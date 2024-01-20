import { FaCartShopping } from "react-icons/fa6";
import * as CartStyles from "./styles";
import { CartContext } from "@src/context/cart-context";
import { useContext } from "react";
export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <CartStyles.Container>
      <FaCartShopping size={30} />
      <CartStyles.TotalCart>{cart.total}</CartStyles.TotalCart>
    </CartStyles.Container>
  );
};
