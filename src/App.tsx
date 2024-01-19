import { BrowserRouter } from "react-router-dom";
import { DefaultRouter } from "./routes/DefaultRouter";

function App() {
  return (
    <BrowserRouter>
      <DefaultRouter />
    </BrowserRouter>
  );
}

export default App;
