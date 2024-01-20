import { FlexBox, Text } from "@src/components";
import { Product } from "@src/entities/models/product";
import { formatMonetaryEn } from "@src/utils/object/monetary";
import * as ProductCardStyles from "../styles";
import { format } from "date-fns";
interface ProductCardInfoProps {
  product: Product;
}

export const ProductCardInfo = ({ product }: ProductCardInfoProps) => {
  return (
    <FlexBox align="center" justify="flex-start" direction="column" gap="xxs">
      <ProductCardStyles.ImageCard src={product.image} />
      <Text size="xxxs">{`Available since: ${format(product.creationAt, "dd/MM/yy")}`}</Text>

      <Text size="sm" weight={500}>
        {product.title}
      </Text>

      <Text size="md" weight={700}>
        {formatMonetaryEn(product.price)}
      </Text>
    </FlexBox>
  );
};
