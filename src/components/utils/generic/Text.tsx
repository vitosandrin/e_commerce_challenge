import styled, { css } from "styled-components";
import { ReactNode } from "react";
import {
  TextAlign,
  TextStyle,
  ValidFontColor,
  Weight,
} from "@src/components/types";

interface TextProps {
  children: ReactNode;
  size?: "medium" | "large" | "small";
  textStyle?: TextStyle;
  weight?: Weight;
  textAlign?: TextAlign;
  color?: ValidFontColor;
}

const TextLarge = css`
  font-size: ${({ theme }) => theme.font.sizes.lg};
`;

const TextMedium = css`
  font-size: ${({ theme }) => theme.font.sizes.md};
  letter-spacing: 0.15px;
`;

const TextSmall = css`
  font-size: ${({ theme }) => theme.font.sizes.sm};
  letter-spacing: 0.15px;
`;

const BaseText = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  letter-spacing: 0.11px;
  font-weight: ${({ weight }) => weight || "normal"};
  text-transform: ${({ textStyle }) => textStyle || "none"};
  text-align: ${({ textAlign }) => textAlign || "match-parent"};
  color: ${({ color, theme: { font } }) =>
    color ? font.colors[color] : font.colors.dark};

  ${({ size }) => size === "large" && TextLarge};
  ${({ size }) => size === "medium" && TextMedium};
  ${({ size }) => size === "small" && TextSmall};
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
