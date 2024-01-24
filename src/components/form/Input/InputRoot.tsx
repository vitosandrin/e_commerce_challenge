import { ReactNode } from "react";
import * as InputStyles from "./styles";

export interface InputRootProps {
  borderRadius?: string;
  children: ReactNode;
}

export const InputRoot = ({ borderRadius, children }: InputRootProps) => {
  return (
    <InputStyles.Container
      borderRadius={borderRadius}
      align="flex-start"
      direction="column"
      justify="center"
      gap="xxxs"
    >
      {children}
    </InputStyles.Container>
  );
}