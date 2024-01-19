import { styled } from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.types.water};
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 9px 13px 12px -3px rgba(0, 0, 0, 0.1);
`;
