import { ReactNode } from "react";
import * as SelectStyles from "./styles";

export interface SelectRootProps {
  children: ReactNode;
}

export const SelectRoot = ({ children }: SelectRootProps) => {
  return (
    <SelectStyles.Container
      align="flex-start"
      direction="column"
      justify="center"
      gap="xxxs"
    >
      {children}
    </SelectStyles.Container>
  );
};
