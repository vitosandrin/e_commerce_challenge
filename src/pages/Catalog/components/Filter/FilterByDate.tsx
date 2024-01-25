import { ProductContext } from "@src/context/product-context";
import { useContext } from "react";
import * as FilterStyles from "./styles";
import { Input } from "@src/components";
export const FilterByDate = () => {
  const { filterByDate, setFilterByDate } = useContext(ProductContext);

  const handleDateChange = (date: Date) => setFilterByDate(date);

  return (
    <FilterStyles.ContainerFilterByDate
      align="center"
      justify="center"
      direction="column"
    >
      <Input.Label text="Date:" size="md" />
      <FilterStyles.InputDateStyled
        selected={filterByDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        withPortal
      />
    </FilterStyles.ContainerFilterByDate>
  );
};
