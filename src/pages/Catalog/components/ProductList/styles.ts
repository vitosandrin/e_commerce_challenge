import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.xs};
  justify-items: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
