import * as CheckoutStyles from "./styles";
import { InfoCart } from "./components/InfoCart/InfoCart";
export const Checkout = () => {
  return (
    <CheckoutStyles.Container
      align="center"
      justify="space-between"
      direction="row"
    >
      <InfoCart />
    </CheckoutStyles.Container>
  );
};
