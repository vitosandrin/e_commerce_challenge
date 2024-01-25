import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  top: 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: 7vh;
  background-color: ${({ theme }) => theme.colors.types.black};

  margin-bottom: 1rem;
`;
