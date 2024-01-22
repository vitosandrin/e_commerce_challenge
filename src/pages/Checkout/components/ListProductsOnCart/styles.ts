import { FlexBox } from "@src/components";
import styled from "styled-components";

export const Container = styled(FlexBox)``;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.types.white};
`;
