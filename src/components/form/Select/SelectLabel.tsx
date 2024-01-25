import { FontSize } from "@src/components/types";
import * as SelectStyles from "./styles";

export interface SelectLabelProps {
  text: string;
  size: FontSize;
}

export const SelectLabel = ({ text, size }: SelectLabelProps) => {
  return (
    <SelectStyles.Label size={size}>
      {text}
    </SelectStyles.Label>
  );
}