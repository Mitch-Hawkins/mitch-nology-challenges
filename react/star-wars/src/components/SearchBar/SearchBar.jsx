import { useState } from "react";

const SearchBar = ({
  setSearchTerm,
  setIsSortedByLength,
  isSortedByLength,
}) => {
  const [inputValue, setIntputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  const handleInputChange = (e) => {
    setIntputValue(e.target.value);
  };

  const handleLengthSorting = () => {
    setIsSortedByLength(true);
  };

  const handleSortReset = () => {
    setIsSortedByLength(false);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Search: </label>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
        <button onClick={handleLengthSorting}>Sort By Length</button>
        {isSortedByLength && <button onClick={handleSortReset}>Reset</button>}
      </form>
    </div>
  );
};

export default SearchBar;
