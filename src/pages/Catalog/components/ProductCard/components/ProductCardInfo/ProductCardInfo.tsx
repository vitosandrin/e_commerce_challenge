import { Text } from "@src/components";
import { Product } from "@src/entities/models/product";
import { formatMonetaryEn } from "@src/utils/object/monetary";
import * as ProductCardStyles from "../../styles";
import * as ProductCardInfoStyles from "./styles";
interface ProductCardInfoProps {
  product: Product;
}

export const ProductCardInfo = ({ product }: ProductCardInfoProps) => {
  return (
    <ProductCardInfoStyles.Container
      align="center"
      justify="flex-start"
      direction="column"
      gap="xs"
    >
      <ProductCardStyles.ImageCard src={product.image} />

      <Text size="xxxs">{`Available since: ${
        product.creationAt.split("T")[0]
      }`}</Text>

      <Text size="xs" weight={500}>
        {product.title}
      </Text>

      <Text size="md" weight={700}>
        {formatMonetaryEn(product.price)}
      </Text>
    </ProductCardInfoStyles.Container>
  );
};
