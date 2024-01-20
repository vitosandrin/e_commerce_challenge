import { Text } from "@src/components";
import * as HeaderStyles from "./styles";
import { Cart } from "./components/Cart/Cart";


export const Header = () => {
  return (
    <HeaderStyles.Container>
      <Text size="medium" weight={600}>Fake Store</Text>
      <Cart />
    </HeaderStyles.Container>
  );
};
