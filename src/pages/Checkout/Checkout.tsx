import { CartContext } from "@src/context/cart-context";
import { formatMonetaryEn } from "@src/utils/object/monetary";
import { useContext } from "react";

export const Checkout = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  console.log(cart.products);

  const handleRemoveFromCart = (productId: number) => removeFromCart(productId);

  return (
    <div>
      <h1>Checkout</h1>

      <p>TOTAL: {cart.total}</p>
      <p>AMOUNT:{formatMonetaryEn(cart.amount)}</p>

      {cart.products.map((product, key) => (
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
    </div>
  );
};
