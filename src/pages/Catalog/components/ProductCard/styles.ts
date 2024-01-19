import { FlexBox } from "@src/components";
import { styled } from "styled-components";

export const Card = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.types.ghost};
  border-radius: 10px;
  padding: 0.225rem;
  box-shadow: 9px 13px 12px -3px rgba(0, 0, 0, 0.1);
  max-width: 90%;
`;

export const HeaderCard = styled(FlexBox)``;

export const InfoCard = styled(FlexBox)``;
