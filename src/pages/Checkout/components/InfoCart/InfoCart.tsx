import { Button, Text, ToastMessage } from "@src/components";
import * as InfoCartStyles from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "@src/context/cart-context";
import { formatMonetaryEn } from "@src/utils/object/monetary";

export const InfoCart = () => {
  const {
    cart: { total, amount },
    finalizePurchase,
  } = useContext(CartContext);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const closeToast = () => {
    setToastMessage(null);
  };

  const handleFinalizePurchase = () => {
    showToast("Congratulations! Your purchase has been completed.");
    finalizePurchase();
  };

  return (
    <InfoCartStyles.Container
      align="center"
      justify="center"
      direction="column"
      gap="xs"
    >
      <Text size="sm" color={1} weight={700}>
        Total items in cart: {total}
      </Text>
      <Text size="sm" color={1} weight={700}>
        Subtotal: {formatMonetaryEn(amount)}
      </Text>
      <Button
        colorType="Success"
        onClick={handleFinalizePurchase}
        disabled={total === 0}
      >
        <Text size="md">Finalize Purchase</Text>
      </Button>
      {toastMessage && (
        <ToastMessage message={toastMessage} onClose={closeToast} />
      )}
    </InfoCartStyles.Container>
  );
};
