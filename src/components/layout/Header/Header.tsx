import * as HeaderStyles from "./styles";
import { Cart } from "./components/Cart/Cart";
import { Title } from "./components/Title";

export const Header = () => {
  return (
    <HeaderStyles.Container>
      <Title />
      <Cart />
    </HeaderStyles.Container>
  );
};
