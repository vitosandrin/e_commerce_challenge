import { ChangeEvent, useContext } from "react";
import Input from "@src/components/form/Input";
import { ProductContext } from "@src/context/product-context";

export const FilterByTitle = () => {
  const { setFilter, filter } = useContext(ProductContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setFilter(inputValue);
  };

  return (
    <Input.Root>
      <Input.Input
        type="text"
        name="title"
        placeholder="title here"
        width="100%"
        height="35px"
        handleOnChange={handleInputChange}
        value={filter}
      />
    </Input.Root>
  );
};
