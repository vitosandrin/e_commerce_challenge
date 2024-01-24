import { Button, QuantitySelector, Text } from "@src/components";
import { CartContext } from "@src/context/cart-context";
import { Product, ProductInCart } from "@src/entities/models/product";
import { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import * as ProductCardActionStyles from "./styles";
import { FaRegTrashCan } from "react-icons/fa6";
interface ProductCardActionsProps {
  product: Product;
}

export const ProductCardActions = ({ product }: ProductCardActionsProps) => {
  const {
    addProductToCart,
    removeManyProductsFromCartById,
    removeProductFromCartById,
    cart: { products },
  } = useContext(CartContext);

  const productInCart = products.find((item) => item.id === product.id);
  const [quantity, setQuantity] = useState<number>(
    productInCart ? productInCart.quantity : 1
  );

  const navigate = useNavigate();

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity((prevQuantity) => {
      if (newQuantity > prevQuantity) {
        addProductToCart(product);
      } else if (newQuantity < prevQuantity) {
        removeProductFromCartById(product.id);
      }
      return newQuantity;
    });
  };

  const handleBuyNow = (product: Product | ProductInCart) => {
    if (products.some((item) => item.id === product.id)) {
      navigate("/checkout");
    } else {
      addProductToCart(product);
      navigate("/checkout");
    }
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
        {products.some((item) => item.id === product.id) ? (
          <>
            <QuantitySelector
              initialQuantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
            <Button
              colorType="Danger"
              height="md"
              onClick={() => handleRemoveFromCart(product.id)}
            >
              <FaRegTrashCan />
            </Button>
          </>
        ) : (
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
        )}
      </ProductCardActionStyles.ContainerCartActions>
    </ProductCardActionStyles.Container>
  );
};
