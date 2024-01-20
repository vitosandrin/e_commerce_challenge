import { BrowserRouter } from "react-router-dom";
import { DefaultRouter } from "./routes/DefaultRouter";
import { Header } from "@src/components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <DefaultRouter />
    </BrowserRouter>
  );
}

export default App;
