import { Text } from "@src/components";
import { Product } from "@src/entities/models/product";
import { formatMonetaryEn } from "@src/utils/object/monetary";
import * as ProductCardStyles from '../styles';
interface ProductCardInfoProps {
  product: Product;
}

export const ProductCardInfo = ({ product }: ProductCardInfoProps) => {
  return (
    <>
      <ProductCardStyles.ImageCard src={product.image} />

      <Text size="small" weight={500}>
        {product.title}
      </Text>

      <Text size="medium" weight={700}>
        {formatMonetaryEn(product.price)}
      </Text>
    </>
  );
};
