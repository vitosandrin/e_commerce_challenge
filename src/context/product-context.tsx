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
  filterByDate: Date | null;
  orderPrice: "asc" | "desc";
  setFilterByPriceRange: (filter: PriceRange) => void;
  setFilterByTitle: (filter: string) => void;
  setFilterByDate: (date: Date | null) => void;
  setOrderPrice: (order: "asc" | "desc") => void;
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
  const [filterByDate, setFilterByDate] = useState<Date | null>(null);
  const [orderPrice, setOrderPrice] = useState<"asc" | "desc">("asc");

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

  const filterProductsByDate = (products: Product[]): Product[] => {
    if (!filterByDate) {
      return products;
    }

    return products.filter((product: Product) => {
      const productDate = new Date(product.creationAt);

      return (
        productDate.getTime() >= filterByDate.setHours(0, 0, 0, 0) &&
        productDate.getTime() <= filterByDate.setHours(23, 59, 59, 999)
      );
    });
  };

  const sortProductsByPrice = (products: Product[]): Product[] => {
    return products.slice().sort((a, b) => {
      return orderPrice === "asc" ? a.price - b.price : b.price - a.price;
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

    filteredProducts = filterProductsByDate(filteredProducts);
    filteredProducts = sortProductsByPrice(filteredProducts);

    setProducts(filteredProducts);
  }, [filterByTitle, filterByPriceRange, filterByDate, orderPrice, allProducts]);

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        filterByTitle,
        filterByPriceRange,
        filterByDate,
        orderPrice,
        setFilterByPriceRange,
        setFilterByTitle,
        setFilterByDate,
        setOrderPrice,
        fetchProducts,
        selectProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
