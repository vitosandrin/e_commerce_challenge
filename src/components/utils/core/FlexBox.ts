import styled from "styled-components";

import {
  AlignItems,
  BreakPoints,
  JustifyContent,
  Spacing,
} from "@src/components/types";

export interface FlexBoxProps {
  direction: "row" | "column";
  justify: JustifyContent;
  align: AlignItems;
  width?: BreakPoints;
  gap?: Spacing;
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: ${(props) => props?.justify};
  align-items: ${(props) => props?.align};
  flex-direction: ${(props) => props?.direction};
  max-width: ${(props) =>
    props?.width ? props?.theme?.breakpoints?.[props?.width] : "100%"};
  width: 100%;
  gap: ${(props) => (props?.gap ? props?.theme?.spacing?.[props?.gap] : 0)};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;
