import { CartContext } from "@src/context/cart-context";
import * as ListProductsOnCartStyles from "./styles";
import { useContext } from "react";
import { ProductCardOnCart } from "./components/ProductCardOnCart/ProductCardOnCart";
import { FlexBox } from "@src/components";
import { FaRegTrashCan } from "react-icons/fa6";
import { Product } from "@src/entities/models/product";

export const ListProductsOnCart = () => {
  const {
    cart: { products },
    removeManyProductsFromCartById,
  } = useContext(CartContext);

  const handleRemoveProductFromCartById = (productId: number) => {
    removeManyProductsFromCartById(productId);
  };

  const groupedProducts: { [key: number]: Product & { quantity: number } } = {};

  products.forEach((product) => {
    const productId = product.id;
    if (!groupedProducts[productId]) {
      groupedProducts[productId] = { ...product, quantity: 0 };
    }
    groupedProducts[productId].quantity++;
  });

  return (
    <ListProductsOnCartStyles.Container
      align="center"
      justify="center"
      direction="column"
      gap="xxs"
    >
      {Object.values(groupedProducts).map((groupedProduct) => (
        <FlexBox
          align="center"
          justify="center"
          direction="row"
          gap="xxs"
          key={groupedProduct.id}
        >
          <ProductCardOnCart product={groupedProduct} />
          <ListProductsOnCartStyles.RemoveButton
            onClick={() => handleRemoveProductFromCartById(groupedProduct.id)}
          >
            <FaRegTrashCan size={30} />
          </ListProductsOnCartStyles.RemoveButton>
        </FlexBox>
      ))}
    </ListProductsOnCartStyles.Container>
  );
};
