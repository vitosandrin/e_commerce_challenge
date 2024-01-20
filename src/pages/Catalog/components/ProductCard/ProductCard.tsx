import { Product } from "@src/entities/models/product";
import * as ProductCardStyles from "./styles";
import { ProductCardActions } from "./components/ProductCardActions/ProductCardActions";
import { ProductCardInfo } from "./components/ProductCardInfo/ProductCardInfo";

interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <ProductCardStyles.Card
      align="center"
      justify="space-between"
      direction="column"
      gap="xs"
    >
      <ProductCardInfo product={product} />
      <ProductCardActions product={product} />
    </ProductCardStyles.Card>
  );
};
