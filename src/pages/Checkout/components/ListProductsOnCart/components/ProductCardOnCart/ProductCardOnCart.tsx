import { Product } from "@src/entities/models/product";
import * as ProductCardOnCartStyles from "./styles";
import { FlexBox, Text } from "@src/components";
import { formatMonetaryEn } from "@src/utils/object/monetary";
import { useContext, useState } from "react";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";
import { CartContext } from "@src/context/cart-context";

interface ProductCardOnCartProps {
  product: Product & { quantity: number };
}

export const ProductCardOnCart = ({ product }: ProductCardOnCartProps) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);

    if (newQuantity > product.quantity) {
      addToCart(product);
    } else if (newQuantity < product.quantity) {
      removeFromCart(product.id);
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

      <Text size="sm" color={1} weight={700}>
        {formatMonetaryEn(product.price)}
      </Text>
    </ProductCardOnCartStyles.Container>
  );
};
