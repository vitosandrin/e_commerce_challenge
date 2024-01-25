import { FlexBox } from "@src/components";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  margin-right: 2rem;
  background-color: ${({ theme }) => theme.colors.types.black};
  height: 500px;
  max-width: 300px;
`;
