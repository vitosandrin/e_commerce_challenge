import { createContext, useState, ReactNode, useEffect } from "react";
import { Product, ProductAPIResponse } from "@src/entities/models/product";
import { api } from "@src/config/client/api";

interface IProductContext {
  products: Product[];
  selectedProduct: Product | null;
  filterByTitle: string;
  setFilterByTitle: (filter: string) => void;
  fetchProducts: () => Promise<void>;
  selectProduct: (productId: number) => void;
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filterByTitle, setFilterByTitle] = useState<string>("");

  const fetchProducts = async () => {
    const { data: response } = await api.get(
      "/categories/4/products?offset=0&limit=10"
    );
    const productsMapped = mapProducts(response);

    setProducts(productsMapped);
    setAllProducts(productsMapped);
  };

  const mapProducts = (products: ProductAPIResponse[]): Product[] => {
    return products.map((product) => ({
      ...product,
      image: product.images[0],
    }));
  };

  const filterProductsByTitle = (products: Product[]): Product[] => {
    return products.filter((product: Product) =>
      product.title.toLowerCase().includes(filterByTitle.toLowerCase())
    );
  };

  const selectProduct = (productId: number) => {
    const product = products.find((product) => product.id === productId);
    if (!product) return;
    setSelectedProduct(product);
  };

  useEffect(() => {
    if (filterByTitle) {
      const filteredProducts = filterProductsByTitle(products);
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  }, [filterByTitle]);

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        filterByTitle,
        setFilterByTitle,
        fetchProducts,
        selectProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
