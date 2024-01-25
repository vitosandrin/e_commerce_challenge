import { FlexBox } from "@src/components";
import styled from "styled-components";
import { shade as shadify } from "polished";

export const Container = styled(FlexBox)``;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-style: none;
  border-radius: 5px;
  height: 3.225rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors.types.white};
  background-color: ${({ theme }) => theme.colors.feedback.error};
  transition-property: color, background-color, border-color, box-shadow, filter;
  transition-duration: ${({ theme }) => theme.transitions.time};
  transition-timing-function: ${({ theme }) => theme.transitions.type};

  &:hover {
    background-color: ${({ theme: { colors } }) =>
      shadify(0.2, colors.feedback.error)};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;
