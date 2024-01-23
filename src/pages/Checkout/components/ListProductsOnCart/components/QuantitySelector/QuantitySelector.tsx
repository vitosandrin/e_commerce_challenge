import { Button, FlexBox, Text } from "@src/components";
import { useEffect, useState } from "react";

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
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);
  
  
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
