import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.feedback.success};
  color: ${({ theme }) => theme.font.colors[1]};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;
