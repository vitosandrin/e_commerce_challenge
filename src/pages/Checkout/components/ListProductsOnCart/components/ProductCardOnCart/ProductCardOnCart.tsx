import { ProductInCart } from "@src/entities/models/product";
import * as ProductCardOnCartStyles from "./styles";
import { FlexBox, Text } from "@src/components";
import { formatMonetaryEn } from "@src/utils/object/monetary";
import { useContext, useState } from "react";
import { QuantitySelector } from "../QuantitySelector";
import { CartContext } from "@src/context/cart-context";

interface ProductCardOnCartProps {
  product: ProductInCart;
}

export const ProductCardOnCart = ({ product }: ProductCardOnCartProps) => {
  const { addProductToCart, removeProductFromCartById } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);

    if (newQuantity > product.quantity) {
      addProductToCart(product);
    } else if (newQuantity < product.quantity) {
      removeProductFromCartById(product.id);
    }
  };

  return (
    <ProductCardOnCartStyles.Container
      align="center"
      justify="space-between"
      direction="row"
    >
      <FlexBox align="center" justify="flex-start" direction="row" gap="xxs">
        <ProductCardOnCartStyles.ImageCard
          src={product.image}
          alt={product.title}
        />
        <Text size="xxs" color={1}>
          {product.title}
        </Text>
      </FlexBox>

      <QuantitySelector
        initialQuantity={quantity}
        onQuantityChange={handleQuantityChange}
      />

      <ProductCardOnCartStyles.ContainerPrice
        align="center"
        justify="center"
        direction="column"
      >
        <Text size="sm" color={1} weight={700}>
          {formatMonetaryEn(product.price * product.quantity)}
        </Text>
        <Text size="xxxs" color={1}>
          ({formatMonetaryEn(product.price)} x {product.quantity})
        </Text>
      </ProductCardOnCartStyles.ContainerPrice>
    </ProductCardOnCartStyles.Container>
  );
};
