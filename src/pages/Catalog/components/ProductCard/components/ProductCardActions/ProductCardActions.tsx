import { Button, Text } from "@src/components";
import { CartContext } from "@src/context/cart-context";
import { Product } from "@src/entities/models/product";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import * as ProductCardActionStyles from "./styles";
interface ProductCardActionsProps {
  product: Product;
}

export const ProductCardActions = ({ product }: ProductCardActionsProps) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = (product: Product) => {
    addToCart(product);
    navigate("/checkout");
  };

  const handleAddToCart = (product: Product) => addToCart(product);

  return (
    <ProductCardActionStyles.Container
      align="center"
      justify="center"
      direction="row"
      gap="xxs"
    >
      <Button colorType="Success" onClick={() => handleAddToCart(product)}>
        <FaCartPlus size={20} />
        <Text size="small" weight={500}>
          Add to cart
        </Text>
      </Button>
      <Button colorType="Info" onClick={() => handleBuyNow(product)}>
        <Text size="small" weight={500}>
          Buy now
        </Text>
      </Button>
    </ProductCardActionStyles.Container>
  );
};
