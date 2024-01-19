import { createContext, useState, ReactNode } from "react";
import { Product } from "@src/entities/models/product";
import { fakeStoreAPI } from "@src/config/client/fake-store-api";
import { format } from "date-fns";
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
    const { data: response } = await fakeStoreAPI.get(
      "/products/category/electronics"
    );

    const productsWithDate = response.map((product: Product) => ({
      ...product,
      included_at: format(new Date().toISOString(), "dd/MM/yyyy"),
    }));

    setProducts(productsWithDate);
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
