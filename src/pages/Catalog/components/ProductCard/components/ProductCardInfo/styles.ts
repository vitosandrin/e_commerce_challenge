import { FlexBox } from "@src/components";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
`;