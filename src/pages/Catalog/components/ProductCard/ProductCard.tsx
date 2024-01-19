import { Button, FlexBox, Text } from "@src/components";
import { CartContext } from "@src/context/cart-context";
import { Product } from "@src/entities/models/product";
import { useContext } from "react";
import * as ProductCardStyles from "./styles";
import { formatMonetaryEn } from "@src/utils/object/monetary";
interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);
  return (
    <ProductCardStyles.Card
      align="center"
      justify="center"
      direction="column"
      gap="xxs"
    >
      <Text size="medium" weight={500}>
        {product.title}
      </Text>

      <Text size="small" weight={500}>
        {formatMonetaryEn(product.price)}
      </Text>

      <Button colorType="Success" onClick={() => addToCart(product)}>
        Add to cart
      </Button>

      <Text size="small">{`Available since: ${product.included_at}`}</Text>
    </ProductCardStyles.Card>
  );
};
