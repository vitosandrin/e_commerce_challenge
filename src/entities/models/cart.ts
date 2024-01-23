import { ProductInCart } from "./product";

export interface Cart {
  products: ProductInCart[];
  total: number;
  amount: number;
}
