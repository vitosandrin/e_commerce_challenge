import styled from "styled-components";
import { FlexBox } from "@src/components/utils/core/FlexBox";
import { FontSize } from "@src/components/types";
interface LabelProps {
  size?: FontSize;
  color?: 1 | 2 | 3;
}

interface InputContainerProps {
  borderRadius?: string;
}

export const Label = styled.label<LabelProps>`
  font-weight: normal;
  font-size: ${({ size, theme: { font } }) => (size ? font.sizes[size] : "sm")};
  color: ${({ color, theme: { font } }) =>
    color ? font.colors[color] : font.colors[1]};
`;

export const Container = styled(FlexBox)<InputContainerProps>`
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  width: fit-content;
`;

export const Input = styled.input`
  height: ${(props) => props.height || "30px"};
  width: ${(props) => props.width || "200px"};
  padding: 0.4rem;
  color: ${({ theme }) => theme.font.colors[3]};
  outline: none;

  transition: border-color 0.3s ease;
  position: relative;

  border-style: none;

  &:focus {
    border-color: ${({ theme }) => theme.font.colors[3]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.font.colors[1]};
    font-size: ${({ theme }) => theme.font.sizes.xs};
    transition: color 0.3s ease;
  }

  &:focus::placeholder {
    color: ${({ theme }) => theme.font.colors[2]};
    top: -12px;
    font-size: ${({ theme }) => theme.font.sizes.xs};
  }
`;
