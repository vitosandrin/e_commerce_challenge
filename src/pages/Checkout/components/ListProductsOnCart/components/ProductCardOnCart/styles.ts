import { FlexBox } from "@src/components";
import { styled } from "styled-components";

export const Container = styled(FlexBox)`
  border-radius: 10px;
  padding: 1rem;
  
  max-width: 425px;
  width: 90%;
  
  background-color: ${({ theme }) => theme.font.colors[3]};
  box-shadow: 9px 13px 12px -3px rgba(0, 0, 0, 0.1);
  `;

export const ImageCard = styled.img`
  max-width: 100%;
  display: block;
`;
