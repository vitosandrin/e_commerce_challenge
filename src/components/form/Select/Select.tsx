import { ChangeEventHandler, ReactNode } from "react";
import * as SelectStyles from "./styles";

export interface SelectProps {
  name: string;
  handleOnChange?: ChangeEventHandler<HTMLSelectElement>;
  value?: string | number | undefined;
  height?: string;
  width?: string;
  defaultValue?: string | number | undefined;
  children: ReactNode;
  required?: boolean;
  disabled?: boolean;
}

export const Select = ({
  name,
  handleOnChange,
  value,
  height,
  width,
  children,
  defaultValue,
  required,
  disabled
}: SelectProps) => {
  return (
    <SelectStyles.Select
      name={name}
      id={name}
      onChange={handleOnChange}
      value={value}
      width={width}
      height={height}
      defaultValue={defaultValue}
      required={required}
      disabled={disabled}
    >
      {children}
    </SelectStyles.Select>
  );
}
