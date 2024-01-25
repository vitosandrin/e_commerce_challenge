import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      types: {
        dragon: string;
        ghost: string;
        ice: string;
        water: string;
        black: string;
        white: string;
      };
      feedback: {
        warning: string;
        error: string;
        success: string;
        successhover: string;
        info: string;
      };
    };
    font: {
      colors: {
        1: string;
        2: string;
        3: string;
      };
      sizes: {
        xxxl: string;
        xxl: string;
        xl: string;
        lg: string;
        md: string;
        sm: string;
        xs: string;
        xxs: string;
        xxxs: string;
      };
    };
    breakpoints: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    transitions: {
      time: string;
      type: string;
    };
    spacing: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}