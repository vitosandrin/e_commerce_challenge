import { FilterByTitle } from "./FilterByTitle";
import * as FilterStyles from "./styles";
export const Filter = () => {

  return (
    <FilterStyles.Container
      align="center"
      justify="center"
      direction="row"
      wrap="wrap"
    >
      <FilterByTitle />
    </FilterStyles.Container>
  );
};
