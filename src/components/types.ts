import { theme } from "@src/theme/theme";

export type FontSize =
  | "xxxs"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";

export type BreakPoints = "xsm" | "sm" | "md" | "lg" | "xl";

export type Spacing =
  | "xxxs"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";

export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

export type AlignItems =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";

export type ValidFontColor = keyof typeof theme.font.colors;

export type TextStyle =
  | "capitalize"
  | "lowercase"
  | "none"
  | "uppercase"
  | "inherit"
  | "initial"
  | "unset";

export type Weight = 100 | 400 | 500 | 600 | 700 | 800 | 900;

export type TextAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";
