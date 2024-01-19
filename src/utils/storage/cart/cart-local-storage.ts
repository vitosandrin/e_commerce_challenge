import { Cart } from "@src/entities/models/cart";

export const setStorageCart = (cart: Cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getStorageCart = (): Cart => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return { products: [], total: 0, amount: 0 };
};

export const clearStorageCart = () => {
  localStorage.removeItem("cart");
};
