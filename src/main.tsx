import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProductProvider } from "./context/product-context.tsx";
import { CartProvider } from "./context/cart-context.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.ts";
import { ResetCss } from "./theme/globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <ResetCss />
          <App />
        </ThemeProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
