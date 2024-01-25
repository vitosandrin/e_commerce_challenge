import { ProductContext } from "@src/context/product-context";
import { ChangeEvent, useContext } from "react";
import * as FilterStyles from "./styles";
import { Select } from "@src/components";

export const OrderByPrice = () => {
  const { orderPrice, setOrderPrice } = useContext(ProductContext);

  const handleOrderChange = (value: ChangeEvent<HTMLSelectElement>) => {
    setOrderPrice(value.target.value as "asc" | "desc");
  };

  return (
    <FilterStyles.ContainerOrderByPrice
      align="center"
      justify="center"
      direction="column"
    >
      <Select.Root>
        <Select.Label text="Order by price:" size="md" />
        <Select.Select
          name="orderPrice"
          value={orderPrice}
          handleOnChange={handleOrderChange}
        >
          <Select.Option value="asc" label="Ascending" />
          <Select.Option value="desc" label="Descending" />
        </Select.Select>
      </Select.Root>
    </FilterStyles.ContainerOrderByPrice>
  );
};
