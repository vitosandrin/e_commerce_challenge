import { Button, Text } from "@src/components";
import { CartContext } from "@src/context/cart-context";
import { Product, ProductInCart } from "@src/entities/models/product";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import * as ProductCardActionStyles from "./styles";
import { FaRegTrashCan } from "react-icons/fa6";
interface ProductCardActionsProps {
  product: Product | ProductInCart;
}

export const ProductCardActions = ({ product }: ProductCardActionsProps) => {
  const {
    addProductToCart,
    removeManyProductsFromCartById,
    cart: { products },
  } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = (product: Product | ProductInCart) => {
    addProductToCart(product);
    navigate("/checkout");
  };

  const handleAddProductToCart = (product: Product | ProductInCart) =>
    addProductToCart(product);

  const handleRemoveFromCart = (productId: number) =>
    removeManyProductsFromCartById(productId);

  return (
    <ProductCardActionStyles.Container
      align="center"
      justify="center"
      direction="row"
      gap="xxs"
    >
      <Button
        colorType="Info"
        height="md"
        onClick={() => handleBuyNow(product)}
      >
        <Text size="xs" weight={500}>
          Buy now
        </Text>
      </Button>
      <ProductCardActionStyles.ContainerCartActions
        align="center"
        justify="center"
        direction="row"
        gap="xxs"
      >
        <Button
          onClick={() => handleAddProductToCart(product)}
          colorType="Success"
          height="md"
        >
          <FaCartPlus size={20} />
          <Text size="xs" weight={500}>
            Add to cart
          </Text>
        </Button>
        {products.some((item) => item.id === product.id) && (
          <Button
            colorType="Danger"
            height="md"
            onClick={() => handleRemoveFromCart(product.id)}
          >
            <FaRegTrashCan />
          </Button>
        )}
      </ProductCardActionStyles.ContainerCartActions>
    </ProductCardActionStyles.Container>
  );
};
