import { Product } from "@src/entities/models/product";
import * as ProductCardOnCartStyles from "./styles";
import { Text } from "@src/components";
import { formatMonetaryEn } from "@src/utils/object/monetary";

interface ProductCardOnCartProps {
  product: Product;
}

export const ProductCardOnCart = ({ product }: ProductCardOnCartProps) => {
  return (
    <ProductCardOnCartStyles.Container
      align="center"
      justify="center"
      direction="row"
    >
      <ProductCardOnCartStyles.ImageCard
        src={product.image}
        alt={product.title}
      />
      <Text size="sm" color={1} weight={700}>
        {product.title}
      </Text>
      <Text size="sm" color={1} weight={700}>
        {formatMonetaryEn(product.price)}
      </Text>
    </ProductCardOnCartStyles.Container>
  );
};
