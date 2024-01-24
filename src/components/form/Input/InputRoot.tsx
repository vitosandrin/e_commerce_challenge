import { ReactNode } from "react";
import * as InputStyles from "./styles";

export interface IInputRootProps {
  borderRadius?: string;
  children: ReactNode;
}

export const InputRoot = ({ borderRadius, children }: IInputRootProps) => {
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