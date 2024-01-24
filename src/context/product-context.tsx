import { createContext, useState, ReactNode, useEffect } from "react";
import { Product, ProductAPIResponse } from "@src/entities/models/product";
import { api } from "@src/config/client/api";

interface PriceRange {
  min: number;
  max: number;
}

interface IProductContext {
  products: Product[];
  selectedProduct: Product | null;
  filterByTitle: string;
  filterByPriceRange: PriceRange;
  setFilterByPriceRange: (filter: PriceRange) => void;
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
  const [filterByPriceRange, setFilterByPriceRange] = useState<PriceRange>({
    min: 0,
    max: 100,
  });

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

  const filterProductsByPriceRange = (products: Product[]): Product[] => {
    return products.filter((product: Product) => {
      const { min, max } = filterByPriceRange;
      return product.price >= min && product.price <= max;
    });
  };

  const selectProduct = (productId: number) => {
    const product = products.find((product) => product.id === productId);
    if (!product) return;
    setSelectedProduct(product);
  };

  useEffect(() => {
    const filteredByTitle = filterProductsByTitle(allProducts);

    let filteredProducts = filteredByTitle;

    if (filterByPriceRange.min !== 0 || filterByPriceRange.max !== 1000) {
      filteredProducts = filterProductsByPriceRange(filteredByTitle);
    }

    setProducts(filteredProducts);
  }, [filterByTitle, filterByPriceRange, allProducts]);
  
  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        filterByTitle,
        filterByPriceRange,
        setFilterByPriceRange,
        setFilterByTitle,
        fetchProducts,
        selectProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
