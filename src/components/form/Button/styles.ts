import { Spacing } from "@src/components/types";
import styled from "styled-components";
import { shade as shadify } from "polished";

export interface ButtonStyleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hoverColor?: string;
  width?: Spacing;
  height?: Spacing;
  borderRadius?: string;
  opacity?: number;
  cursor?: string;
  variation?: 1 | 2;
  shade?: 1 | 2 | 3 | 4 | "pure";
}

export const BaseButton = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  gap: 0.3rem;

  padding: 0.5rem;
  border-style: none;
  border-width: 0px;
  border-radius: ${(props) => props?.borderRadius || "0.3rem"};

  width: ${(props) =>
    props?.width ? props.theme.spacing[props.width] : "150px"};
  height: ${(props) =>
    props?.height ? props.theme.spacing[props.height] : "35px"};

  &:hover {
    background-color: ${(props) => props?.hoverColor};
  }
  color: ${({ theme }) => theme.font.colors[1]};

  transition-property: color, background-color, border-color, box-shadow, filter;
  transition-duration: ${({ theme }) => theme.transitions.time};
  transition-timing-function: ${({ theme }) => theme.transitions.type};

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled(BaseButton)<ButtonStyleProps>`
  cursor: ${({ cursor }) => cursor};

  opacity: ${({ opacity }) => opacity};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => (height ? height : "fit-content")};
  width: ${({ width }) => (width ? width : "fit-content")};

  &.Danger {
    background: ${({ theme: { colors } }) => colors.feedback.error};

    &:hover {
      background-color: ${({ theme: { colors } }) =>
        shadify(0.2, colors.feedback.error)};
    }
    &:active {
      background-color: ${({ theme: { colors } }) =>
        shadify(0.35, colors.feedback.error)};
    }
  }

  &.Success {
    background: ${({ theme: { colors } }) => colors.feedback.success};

    &:hover {
      background-color: ${({ theme: { colors } }) =>
        shadify(0.2, colors.feedback.success)};
    }
    &:active {
      background-color: ${({ theme: { colors } }) =>
        shadify(0.35, colors.feedback.success)};
    }
  }

  &.Info {
    background: ${({ theme: { colors } }) => colors.feedback.info};

    &:hover {
      background-color: ${({ theme: { colors } }) =>
        shadify(0.2, colors.feedback.info)};
    }
    &:active {
      background-color: ${({ theme: { colors } }) =>
        shadify(0.35, colors.feedback.info)};
    }
  }
`;
