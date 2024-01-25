import { FilterByDate } from "./FilterByDate";
import { FilterByPrice } from "./FilterByPrice";
import { FilterByTitle } from "./FilterByTitle";
import { OrderByPrice } from "./OrderByPrice";
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
      <FilterByPrice />
      <OrderByPrice />
      <FilterByDate />
    </FilterStyles.Container>
  );
};
