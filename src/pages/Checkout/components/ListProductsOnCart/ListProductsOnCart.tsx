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
    removeFromCart,
  } = useContext(CartContext);

  const handleRemoveFromCart = (productId: number) => removeFromCart(productId);
  
  const groupedProducts: Product[] = [];
  const addedProductIds: number[] = [];

  products.forEach((product) => {
    if (!addedProductIds.includes(product.id)) {
      const productWithQuantity = {
        ...product,
        quantity: products.filter((p) => p.id === product.id).length,
      };
      groupedProducts.push(productWithQuantity);
      addedProductIds.push(product.id);
    }
  });

  return (
    <ListProductsOnCartStyles.Container
      align="center"
      justify="center"
      direction="column"
      gap="xxs"
    >
       {groupedProducts.map((product) => (
        <FlexBox align="center" justify="center" direction="row" gap="xxs" key={product.id}>
          <ProductCardOnCart product={product} />
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
