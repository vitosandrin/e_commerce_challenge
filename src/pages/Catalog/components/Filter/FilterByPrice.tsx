import { ProductContext } from "@src/context/product-context";
import { useContext } from "react";
import * as FilterStyles from "./styles";
import { Text } from "@src/components";
import { formatMonetaryEn } from "@src/utils/object/monetary";

export const FilterByPrice = () => {
  const { filterByPriceRange, setFilterByPriceRange } =
    useContext(ProductContext);

  const handleSliderChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setFilterByPriceRange({ min: values[0], max: values[1] });
    } else {
      setFilterByPriceRange({ min: values, max: values });
    }
  };

  return (
    <FilterStyles.ContainerFilterByPrice
      align="flex-start"
      justify="center"
      direction="column"
    >
      <Text size="sm" color={1} weight={500}>
        {formatMonetaryEn(filterByPriceRange.min)} -{" "}
        {formatMonetaryEn(filterByPriceRange.max)}
      </Text>
      <FilterStyles.RangePriceStyled
        min={0}
        max={100}
        step={1}
        range
        defaultValue={[filterByPriceRange.min, filterByPriceRange.max]}
        onChange={handleSliderChange}
      />
    </FilterStyles.ContainerFilterByPrice>
  );
};
