import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
  html,
  body {
    height: 100%;
    animation: fadeIn ${({ theme }) => theme.transitions.time} ${({ theme }) =>
  theme.transitions.type};
    color: ${({ theme }) => theme.font.colors[1]};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.xsm}) {
      font-size: 80%;
    }
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family:"Quicksand";
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: transparent;
  }
  
  ::-webkit-scrollbar {
    width: 12px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);

  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
