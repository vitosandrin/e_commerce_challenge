import { Text } from "@src/components";
import * as InfoCartStyles from "./styles";
import { useContext } from "react";
import { CartContext } from "@src/context/cart-context";
import { formatMonetaryEn } from "@src/utils/object/monetary";

export const InfoCart = () => {
  const { cart } = useContext(CartContext);
  return (
    <InfoCartStyles.Container
      align="center"
      justify="center"
      direction="column"
    >
      <Text size="sm" color={1} weight={700}>
        Total items: {cart.total}
      </Text>
      <Text size="sm" color={1} weight={700}>
        Amount: {formatMonetaryEn(cart.amount)}
      </Text>
    </InfoCartStyles.Container>
  );
};
