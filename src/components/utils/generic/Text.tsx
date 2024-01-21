import styled from "styled-components";
import { ReactNode } from "react";
import {
  FontSize,
  TextAlign,
  TextStyle,
  ValidFontColor,
  Weight,
} from "@src/components/types";

interface TextProps {
  children: ReactNode | Date;
  size?: FontSize;
  textStyle?: TextStyle;
  weight?: Weight;
  textAlign?: TextAlign;
  color?: ValidFontColor;
}

const BaseText = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  letter-spacing: 0.11px;
  font-weight: ${({ weight }) => weight || "normal"};
  text-transform: ${({ textStyle }) => textStyle || "none"};
  text-align: ${({ textAlign }) => textAlign || "match-parent"};
  color: ${({ color, theme: { font } }) =>
    color ? font.colors[color] : font.colors[1]};

  font-size: ${({ size, theme: { font } }) => (size ? font.sizes[size] : "sm")};
`;

export const Text = ({
  children,
  color,
  size,
  textStyle,
  weight,
}: TextProps) => {
  return (
    <BaseText size={size} color={color} textStyle={textStyle} weight={weight}>
      {children}
    </BaseText>
  );
};
