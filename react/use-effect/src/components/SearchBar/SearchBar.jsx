import React from "react";
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
    <form onSubmit={handleFormSubmit}>
      {" "}
      <input type="number" onChange={handleInputChange} />
      <button type="submit">Search for users</button>
    </form>
  );
};

export default SearchBar;
