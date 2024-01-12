import { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setIntputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  const handleInputChange = (e) => {
    setIntputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Search: </label>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
