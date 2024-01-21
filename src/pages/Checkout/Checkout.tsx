import { CartContext } from "@src/context/cart-context";
import { formatMonetaryEn } from "@src/utils/object/monetary";
import { useContext } from "react";
import * as CheckoutStyles from "./styles";
import { InfoCart } from "./components/InfoCart/InfoCart";
export const Checkout = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId: number) => removeFromCart(productId);

  return (
    <CheckoutStyles.Container
      align="center"
      justify="space-between"
      direction="row"
    >
      {cart.products.map((product) => (
        <div style={{ borderBottom: "1px solid white" }}>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "200px" }}
          />

          <p>{product.title}</p>
          <p>{formatMonetaryEn(product.price)}</p>

          <button onClick={() => handleRemoveFromCart(product.id)}>
            Remove
          </button>
        </div>
      ))}
      <InfoCart />
    </CheckoutStyles.Container>
  );
};
