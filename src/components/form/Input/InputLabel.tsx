import * as InputStyles from "./styles";

export interface IInputLabelProps {
  type: string;
  text: string;
  color?: string;
  fontSize?: string;
}

export const InputLabel = ({ text, color, fontSize }: IInputLabelProps) => {
  return (
    <InputStyles.Label fontSize={fontSize} color={color}>
      {text}
    </InputStyles.Label>
  );
}