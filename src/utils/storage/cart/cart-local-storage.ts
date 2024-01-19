import { Product } from "../../../entities/models/product";

export const setStorageCartProducts = (cartProducts: Product[]) => {
  localStorage.setItem("cart", JSON.stringify(cartProducts));
};

export const getStorageCartProducts = (): [] => {
  const cartProducts = localStorage.getItem("cart");
  if (cartProducts) {
    return JSON.parse(cartProducts);
  }
  return [];
};

export const clearStorageCartProducts = () => {
  localStorage.removeItem("cart");
};
