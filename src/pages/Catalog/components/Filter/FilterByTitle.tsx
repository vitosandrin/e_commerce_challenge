import { ChangeEvent, useContext } from "react";
import Input from "@src/components/form/Input";
import { ProductContext } from "@src/context/product-context";

export const FilterByTitle = () => {
  const { setFilterByTitle, filterByTitle } = useContext(ProductContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setFilterByTitle(inputValue);
  };

  return (
    <Input.Root>
      <Input.Input
        type="text"
        name="title"
        placeholder="title here"
        width="200px"
        height="25px"
        handleOnChange={handleInputChange}
        value={filterByTitle}
      />
    </Input.Root>
  );
};
