import { Route, Routes } from "react-router-dom";
import { Checkout, Catalog } from "@src/pages";

export const DefaultRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};
