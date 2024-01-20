import { FlexBox } from "@src/components";
import { styled } from "styled-components";

export const Card = styled(FlexBox)`
  border-radius: 10px;
  padding: 0.5rem;

  max-width: 425px;
  width: 90%;
  
  background-color: ${({ theme }) => theme.font.colors[3]};
  box-shadow: 9px 13px 12px -3px rgba(0, 0, 0, 0.1);

  `;

export const HeaderCard = styled(FlexBox)``;

export const InfoCard = styled(FlexBox)``;

export const ImageCard = styled.img`
  max-width: 100%;
  width: 200px;
  display: block;
  transform: scale(0.8);
`;
