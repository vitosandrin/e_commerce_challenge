import { ProductContext } from "@src/context/product-context";
import { useContext } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FilterByDate = () => {
  const { filterByDate, setFilterByDate } = useContext(ProductContext);

  const handleDateChange = (date: Date) => setFilterByDate(date);

  return (
    <ReactDatePicker
      selected={filterByDate}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
    />
  );
};
