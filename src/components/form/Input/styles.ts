import styled from "styled-components";
import { FlexBox } from "@src/components/utils/core/FlexBox";
interface LabelProps {
  color?: string;
  fontSize?: string;
}

interface InputContainerProps {
  borderRadius?: string;
}

export const Label = styled.label<LabelProps>`
  font-weight: normal;
  font-size: ${(props) => props?.fontSize};
  color: ${(props) => props?.color};
`;

export const Container = styled(FlexBox)<InputContainerProps>`
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  width: fit-content;
`;

export const Input = styled.input`
  border-radius: 0.3rem;
  height: ${(props) => props.height || "30px"};
  width: ${(props) => props.width || "200px"};
  padding: 0.4rem;
  color: ${({ theme }) => theme.font.colors[1]};
  outline: none;

  transition: border-color 0.3s ease;
  position: relative;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[2]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.font.colors[1]};
    font-size: ${({ theme }) => theme.font.sizes.xs};
    transition: color 0.3s ease;
  }

  &:focus::placeholder {
    color: ${({ theme }) => theme.colors.primary[2]};
    top: -12px;
    font-size: ${({ theme }) => theme.font.sizes.xs};
  }
`;
