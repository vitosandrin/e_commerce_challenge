import { ButtonHTMLAttributes, ReactNode } from "react";
import * as ButtonStyles from "./styles";
import { Spacing } from "@src/components/types";

type TButton = "button" | "submit" | "reset" | undefined;

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyles.ButtonStyleProps {
  children?: ReactNode;
  hoverColor?: string;
  disabled?: boolean;
  height?: Spacing;
  width?: Spacing;
  borderRadius?: string;
  onClick?: React.MouseEventHandler;
  type?: TButton;
  notAllowed?: boolean;
  colorType: "Danger" | "Success";
}

export const Button = ({
  children,
  hoverColor,
  onClick,
  disabled,
  height,
  width,
  borderRadius,
  type,
  notAllowed,
  opacity,
  className,
  colorType,
}: IButtonProps) => {
  return (
    <ButtonStyles.Button
      hoverColor={hoverColor}
      className={`${colorType} ${className} `}
      disabled={disabled}
      onClick={onClick}
      height={height}
      width={width}
      borderRadius={borderRadius}
      opacity={opacity ? opacity : 1}
      cursor={notAllowed ? "not-allowed" : "pointer"}
      type={type}
    >
      {children}
    </ButtonStyles.Button>
  );
};
