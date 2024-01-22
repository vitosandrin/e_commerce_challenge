import { FlexBox } from "@src/components";
import { styled } from "styled-components";

export const Container = styled(FlexBox)`
  border-radius: 10px;
  padding: 1rem;

  max-width: 85%;

  background-color: ${({ theme }) => theme.font.colors[3]};
  box-shadow: 9px 13px 12px -3px rgba(0, 0, 0, 0.1);

  height: 3.5rem;
`;

export const ImageCard = styled.img`
  max-width: 10%;
  border-radius: 10px;
  display: block;
`;
