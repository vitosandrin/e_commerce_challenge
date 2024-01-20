import { Text } from "@src/components";
import { Product } from "@src/entities/models/product";
import * as ProductCardStyles from "./styles";
import { ProductCardActions } from "./components/ProductCardActions";
import { ProductCardInfo } from "./components/ProductCardInfo";

interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <ProductCardStyles.Card
      align="center"
      justify="space-evenly"
      direction="column"
      gap="xxs"
    >
      <ProductCardInfo product={product} />
      <ProductCardActions product={product} />
      <Text size="small">{`Available since: ${product.included_at}`}</Text>
    </ProductCardStyles.Card>
  );
};
