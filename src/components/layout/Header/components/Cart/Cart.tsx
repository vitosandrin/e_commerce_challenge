import { FaCartShopping } from "react-icons/fa6";
import * as CartStyles from "./styles";
import { CartContext } from "@src/context/cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <CartStyles.Container>
      <Link to="/checkout">
        <FaCartShopping size={30} />
        <CartStyles.TotalCart>{cart.total}</CartStyles.TotalCart>
      </Link>
    </CartStyles.Container>
  );
};
