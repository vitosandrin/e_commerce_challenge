import { FlexBox } from "@src/components";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
