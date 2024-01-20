import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.types.black};

  margin-bottom: 0.75rem;
  `;
