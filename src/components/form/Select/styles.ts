import styled from "styled-components";
import { FlexBox } from "@src/components/utils/core/FlexBox";
import { FontSize } from "@src/components/types";

interface LabelProps {
  size?: FontSize;
}

interface SelectProps {
  height?: string;
  width?: string;
}

export const Label = styled.label<LabelProps>`
  font-weight: normal;
  font-size: ${({ size, theme: { font } }) => (size ? font.sizes[size] : "sm")};
  color: ${({ theme }) => theme.font.colors[1]};
`;

export const Container = styled(FlexBox)``;

export const Select = styled.select<SelectProps>`
  height: ${(props) => props.height || "25px"};
  width: ${(props) => props.width || "100%"};
  outline: none;
  transition: border-color 0.3s ease;
  position: relative;
  font-size: ${({ theme }) => theme.font.sizes.xs};
  color: ${({ theme }) => theme.font.colors[3]};

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.font.colors[1]};
  }
`;

export const Option = styled.option`
  font-size: ${({ theme }) => theme.font.sizes.xs};
`;
