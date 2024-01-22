import { Product } from "@src/entities/models/product";
import * as ProductCardOnCartStyles from "./styles";
import { FlexBox, Text } from "@src/components";
import { formatMonetaryEn } from "@src/utils/object/monetary";

interface ProductCardOnCartProps {
  product: Product;
}

export const ProductCardOnCart = ({ product }: ProductCardOnCartProps) => {
  return (
    <ProductCardOnCartStyles.Container
      align="center"
      justify="space-between"
      direction="row"
    >
      <FlexBox align="center" justify="flex-start" direction="row" gap="sm">
        <ProductCardOnCartStyles.ImageCard
          src={product.image}
          alt={product.title}
        />
        <Text size="xs" color={1}>
          {product.title}
        </Text>
      </FlexBox>

      <Text size="sm" color={1} weight={700}>
        {formatMonetaryEn(product.price)}
      </Text>
    </ProductCardOnCartStyles.Container>
  );
};
