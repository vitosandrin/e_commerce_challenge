import { ChangeEvent, useContext } from "react";
import { ProductContext } from "@src/context/product-context";
import { Input } from "@src/components";

export const FilterByTitle = () => {
  const { setFilterByTitle, filterByTitle } = useContext(ProductContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterByTitle(event.target.value);
  };

  return (
    <Input.Root>
      <Input.Label text="Search:" size="md"/>
      <Input.Input
        type="text"
        name="title"
        placeholder="title here"
        width="100%"
        height="25px"
        handleOnChange={handleInputChange}
        value={filterByTitle}
      />
    </Input.Root>
  );
};
