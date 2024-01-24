import { FontSize } from "@src/components/types";
import * as InputStyles from "./styles";

export interface InputLabelProps {
  text: string;
  color?: 1 | 2 | 3;
  size?: FontSize;
}

export const InputLabel = ({ text, color, size }: InputLabelProps) => {
  return (
    <InputStyles.Label size={size} color={color}>
      {text}
    </InputStyles.Label>
  );
};
