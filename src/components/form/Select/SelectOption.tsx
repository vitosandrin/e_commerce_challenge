import * as SelectStyles from "./styles";

interface SelectOptionProps {
  value: string | number | null;
  label: string;
  disabled?: boolean;
}
export const SelectOption = ({ value, label, disabled }: SelectOptionProps) => {
  return (
    <SelectStyles.Option
      key={value}
      value={value === null ? "" : value}
      disabled={disabled}
    >
      {label}
    </SelectStyles.Option>
  );
};
