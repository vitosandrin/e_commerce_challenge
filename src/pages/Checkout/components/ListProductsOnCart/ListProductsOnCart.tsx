import { CartContext } from "@src/context/cart-context";
import * as ListProductsOnCartStyles from "./styles";
import { useContext } from "react";
import { ProductCardOnCart } from "./components/ProductCardOnCart/ProductCardOnCart";
import { FlexBox } from "@src/components";
import { FaRegTrashCan } from "react-icons/fa6";

export const ListProductsOnCart = () => {
  const {
    cart: { products },
    removeFromCart,
  } = useContext(CartContext);

  const handleRemoveFromCart = (productId: number) => removeFromCart(productId);

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
          <ListProductsOnCartStyles.RemoveButton
            onClick={() => handleRemoveFromCart(product.id)}
          >
            <FaRegTrashCan size={30} />
          </ListProductsOnCartStyles.RemoveButton>
        </FlexBox>
      ))}
    </ListProductsOnCartStyles.Container>
  );
};
