import { Product } from "@src/entities/models/product";
import * as ProductCardOnCartStyles from "./styles";
import { FlexBox, Text } from "@src/components";
import { formatMonetaryEn } from "@src/utils/object/monetary";
import { useContext, useState } from "react";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";
import { CartContext } from "@src/context/cart-context";

interface ProductCardOnCartProps {
  product: Product;
}

export const ProductCardOnCart = ({ product }: ProductCardOnCartProps) => {
  const [quantity, setQuantity] = useState(1);

  const {
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      addToCart(product);
    } else {
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
