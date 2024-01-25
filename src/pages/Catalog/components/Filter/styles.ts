import { FlexBox } from "@src/components";
import Slider from "rc-slider";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import "rc-slider/assets/index.css";

export const Container = styled(FlexBox)`
  margin: 0 0 0 1rem;
  border-radius: 10px;
  padding: 1rem;
  max-width: 20vw;
  background-color: ${({ theme }) => theme.colors.types.black};
`;

export const ContainerFilterByPrice = styled(FlexBox)`
  width: 95%;
`;

export const RangePriceStyled = styled(Slider)`
  width: 100%;
`;

export const ContainerFilterByDate = styled(FlexBox)`
  width: 100%;
`;
export const InputDateStyled = styled(ReactDatePicker)`
  height: 25px;
  width: 100%;
`;
