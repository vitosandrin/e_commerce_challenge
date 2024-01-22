import { Button, FlexBox, Text } from "@src/components";
import { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

export const QuantitySelector = ({
  initialQuantity,
  onQuantityChange,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };
  return (
    <FlexBox align="center" justify="center" direction="row" gap="xxs">
      <Button
        height="sm"
        colorType="Info"
        onClick={handleDecrement}
        disabled={quantity === 0}
      >
        -
      </Button>
      <Text size="sm" color={1} weight={700}>
        {quantity}
      </Text>
      <Button height="sm" colorType="Info" onClick={handleIncrement}>
        +
      </Button>
    </FlexBox>
  );
};
