import { Product } from "@src/entities/models/product";

export const filterProductsByTitle = (products: Product[], search: string) => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
};

export const filterProductByPrice = (products: Product[], price: number) => {
  return products.filter((product) => product.price <= price);
};
