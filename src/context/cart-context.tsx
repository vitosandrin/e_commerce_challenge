import { createContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@src/entities/models/product";
import { Cart } from "@src/entities/models/cart";
import {
  getStorageCart,
  setStorageCart,
} from "@src/utils/storage/cart/cart-local-storage";

interface ICartContext {
  cart: Cart;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ products: [], total: 0, amount: 0 });

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedProducts = [...prevCart.products, product];
      const updatedAmount = prevCart.amount + product.price;
      const updatedTotal = updatedProducts.length;
      return {
        products: updatedProducts,
        total: updatedTotal,
        amount: updatedAmount,
      };
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const indexOfItemToRemove = prevCart.products.findIndex(
        (item) => item.id === productId
      );
  
      if (indexOfItemToRemove === -1) {
        return prevCart;
      }
  
      const updatedProducts = [...prevCart.products];
      updatedProducts.splice(indexOfItemToRemove, 1);
  
      const updatedAmount =
        prevCart.amount - prevCart.products[indexOfItemToRemove].price;
      const updatedTotal = updatedProducts.length;
  
      return {
        products: updatedProducts,
        total: updatedTotal,
        amount: updatedAmount,
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
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
