export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  creationAt: string;
}

export type ProductAPIResponse = Omit<Product, "image"> & { images: string[] };
export type ProductInCart = Product & { quantity: number };