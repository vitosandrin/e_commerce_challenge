import { createContext, useState, useEffect, ReactNode } from "react";
import { Product, ProductInCart } from "@src/entities/models/product";
import { Cart } from "@src/entities/models/cart";
import {
  getStorageCart,
  setStorageCart,
} from "@src/utils/storage/cart/cart-local-storage";

interface ICartContext {
  cart: Cart;
  addProductToCart: (product: Product | ProductInCart) => void;
  removeProductFromCartById: (productId: number) => void;
  removeManyProductsFromCartById: (productId: number) => void;
  finalizePurchase: () => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ products: [], total: 0, amount: 0 });

  const addProductToCart = (product: Product | ProductInCart) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.products.find(
        (item) => item.id === product.id
      );

      const updatedProducts = existingProduct
        ? prevCart.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart.products, { ...product, quantity: 1 }];

      const updatedTotal = updatedProducts.reduce(
        (total, item) => total + item.quantity,
        0
      );

      const updatedAmount = prevCart.amount + product.price;

      return {
        ...prevCart,
        products: updatedProducts,
        amount: updatedAmount,
        total: updatedTotal,
      };
    });
  };

  const removeManyProductsFromCartById = (productId: number) => {
    setCart((prevCart) => {
      const removedProducts = prevCart.products.filter(
        (product) => product.id === productId
      );

      if (removedProducts.length === 0) {
        return prevCart;
      }

      const updatedProducts = prevCart.products.filter(
        (product) => product.id !== productId
      );

      const removedAmount = removedProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );

      const updatedTotal = updatedProducts.reduce(
        (total, product) => total + product.quantity,
        0
      );

      const updatedAmount = prevCart.amount - removedAmount;

      return {
        ...prevCart,
        products: updatedProducts,
        amount: updatedAmount,
        total: updatedTotal,
      };
    });
  };

  const removeProductFromCartById = (productId: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.products.find(
        (product) => product.id === productId
      );

      if (!existingProduct) {
        return prevCart;
      }

      const updatedProducts = prevCart.products.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product
      );

      const updatedAmount = prevCart.amount - existingProduct.price;

      const updatedTotal = updatedProducts.reduce(
        (total, product) => total + product.quantity,
        0
      );

      return {
        ...prevCart,
        products: updatedProducts,
        amount: updatedAmount,
        total: updatedTotal,
      };
    });
  };

  const finalizePurchase = () => {
    setCart({ products: [], amount: 0, total: 0 });
  };

  useEffect(() => {
    setStorageCart(cart);
  }, [cart]);

  useEffect(() => {
    const storedCart = getStorageCart();
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCartById,
        removeManyProductsFromCartById,
        finalizePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
