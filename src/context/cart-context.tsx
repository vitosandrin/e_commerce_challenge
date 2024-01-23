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
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ products: [], total: 0, amount: 0 });

  const addProductToCart = (product: Product | ProductInCart) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.products.findIndex(
        (p) => p.id === product.id
      );

      const updatedProducts =
        existingProductIndex !== -1
          ? prevCart.products.map((product, index) =>
              index === existingProductIndex
                ? { ...product, quantity: product.quantity + 1 }
                : product
            )
          : [...prevCart.products, { ...product, quantity: 1 }];

      const updatedTotal = updatedProducts.reduce(
        (total, p) => total + p.quantity,
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
        (total, product) => total + product.price,
        0
      );

      const updatedAmount = prevCart.amount - removedAmount;
      const updatedTotal = updatedProducts.length;

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
      const indexOfItemToRemove = prevCart.products.findIndex(
        (item) => item.id === productId
      );

      if (indexOfItemToRemove === -1) {
        return prevCart;
      }

      const updatedProducts = [...prevCart.products];
      const removedProduct = updatedProducts[indexOfItemToRemove];

      if (removedProduct.quantity > 1) {
        removedProduct.quantity -= 1;
      }

      const updatedAmount = prevCart.amount - removedProduct.price;
      const updatedTotal = updatedProducts.reduce(
        (total, p) => total + p.quantity,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
