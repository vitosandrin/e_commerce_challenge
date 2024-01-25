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
  width: 33vw;
  max-width: 250px;
  background-color: ${({ theme }) => theme.colors.types.black};
`;

export const ContainerFilterByPrice = styled(FlexBox)``;

export const RangePriceStyled = styled(Slider)``;

export const ContainerFilterByDate = styled(FlexBox)``;

export const InputDateStyled = styled(ReactDatePicker)`
  height: 25px;
  outline: none;
`;

export const ContainerOrderByPrice = styled(FlexBox)``;
