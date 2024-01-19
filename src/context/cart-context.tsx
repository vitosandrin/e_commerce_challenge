import { createContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../entities/models/product";
import { Cart } from "../entities/models/cart";
import {
  getStorageCartProducts,
  setStorageCartProducts,
} from "../utils/storage/cart/cart-local-storage";

interface ICartContext {
  cart: Cart;
  cartProducts: Product[];
  cartProductsAmount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [cartProductsAmount, setCartProductsAmount] = useState(0);
  const [cart, setCart] = useState<Cart>({
    products: cartProducts,
    amount: cartProductsAmount,
    total: cartProducts.length,
  });

  const addToCart = (product: Product) => {
    setCartProducts((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartProducts((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  useEffect(() => {
    const amount = cartProducts.reduce((acc, item) => acc + item.price, 0);
    setCartProductsAmount(amount);

    setStorageCartProducts(cartProducts);
  }, [cartProducts]);

  useEffect(() => {
    const storedCartProducts = getStorageCartProducts();
    if (storedCartProducts) {
      setCartProducts(storedCartProducts);
    }
  }, []);

  useEffect(() => {
    setCart({
      products: cartProducts,
      amount: cartProductsAmount,
      total: cartProducts.length,
    });
  }, [cartProducts, cartProductsAmount]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartProducts,
        cartProductsAmount,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
