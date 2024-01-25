import * as InputStyles from "./styles";

export interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  handleOnChange?: React.ChangeEventHandler;
  value: string | number | undefined;
  height?: string;
  width?: string;
  disabled?: boolean;
}

export const Input = ({
  type,
  name,
  placeholder,
  handleOnChange,
  value,
  height,
  width,
  disabled,
}: InputProps) => {
  return (
    <InputStyles.Input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
      width={width}
      height={height}
      disabled={disabled}
    />
  );
}