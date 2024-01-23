import { CartContext } from "@src/context/cart-context";
import * as ListProductsOnCartStyles from "./styles";
import { useContext } from "react";
import { ProductCardOnCart } from "./components/ProductCardOnCart/ProductCardOnCart";
import { FlexBox, Text } from "@src/components";
import { FaRegTrashCan } from "react-icons/fa6";

export const ListProductsOnCart = () => {
  const {
    cart: { products },
    removeManyProductsFromCartById,
  } = useContext(CartContext);

  const handleRemoveProductFromCartById = (productId: number) => {
    removeManyProductsFromCartById(productId);
  };

  return (
    <ListProductsOnCartStyles.Container
      align="center"
      justify="center"
      direction="column"
      gap="xxs"
    >
      {products.length > 0 ? (
        products.map((product) => (
          <FlexBox
            align="center"
            justify="center"
            direction="row"
            gap="xxs"
            key={product.id}
          >
            <ProductCardOnCart product={product} />
            <ListProductsOnCartStyles.RemoveButton
              onClick={() => handleRemoveProductFromCartById(product.id)}
            >
              <FaRegTrashCan size={30} />
            </ListProductsOnCartStyles.RemoveButton>
          </FlexBox>
        ))
      ) : (
        <Text size="sm">You don't have items in your cart!</Text>
      )}
    </ListProductsOnCartStyles.Container>
  );
};
