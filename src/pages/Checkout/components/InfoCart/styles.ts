import { FlexBox } from "@src/components";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  margin-right: 2rem;
  background-color: ${({ theme }) => theme.colors.types.black};
  max-width: 300px;
  padding: 1rem;
  border-radius: 10px;
`;
