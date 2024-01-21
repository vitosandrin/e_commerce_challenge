import { FlexBox } from "@src/components";
import styled from "styled-components";

export const Container = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.types.black};
  height: 500px;
  max-width: 300px;
`;
