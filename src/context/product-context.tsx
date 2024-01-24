import { createContext, useState, ReactNode } from "react";
import { Product, ProductAPIResponse } from "@src/entities/models/product";
import { api } from "@src/config/client/api";
interface IProductContext {
  products: Product[];
  selectedProduct: Product | null;
  fetchProducts: () => Promise<void>;
  selectProduct: (productId: number) => void;
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    const { data: response } = await api.get("/categories/4/products?offset=0&limit=10");
    const productsMapped = response.map((product: ProductAPIResponse) => ({
      ...product,
      image: product.images[0],
    }));

    setProducts(productsMapped);
  };

  const selectProduct = (productId: number) => {
    const product = products.find((product) => product.id === productId);
    if (!product) return;
    setSelectedProduct(product);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        fetchProducts,
        selectProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
