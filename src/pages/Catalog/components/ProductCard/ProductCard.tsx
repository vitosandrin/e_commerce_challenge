import { Text } from "@src/components";
import { Card } from "@src/components/utils/core/Card";
import { Product } from "@src/entities/models/product";

interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <Text size="medium" weight={500}>
        {product.title}
      </Text>

      <Text size="small">{product.included_at}</Text>
    </Card>
  );
};
