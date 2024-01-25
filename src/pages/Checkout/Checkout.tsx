import * as CheckoutStyles from "./styles";
import { InfoCart } from "./components/InfoCart/InfoCart";
import { ListProductsOnCart } from "./components/ListProductsOnCart/ListProductsOnCart";
export const Checkout = () => {
  return (
    <CheckoutStyles.Container
      align="flex-start"
      justify="space-between"
      direction="row"
      gap="xxs"
    >
      <ListProductsOnCart />
      <InfoCart />
    </CheckoutStyles.Container>
  );
};
