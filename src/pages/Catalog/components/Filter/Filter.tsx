import { FlexBox } from "@src/components";
import { FilterByDate } from "./FilterByDate";
import { FilterByPrice } from "./FilterByPrice";
import { FilterByTitle } from "./FilterByTitle";
import * as FilterStyles from "./styles";
export const Filter = () => {
  return (
    <FilterStyles.Container
      align="center"
      justify="center"
      direction="column"
      gap="xs"
    >
      <FilterByTitle />

      <FlexBox align="center" justify="space-around" direction="row" gap="xs">
        <FilterByPrice />
        <FilterByDate />
      </FlexBox>
    </FilterStyles.Container>
  );
};
