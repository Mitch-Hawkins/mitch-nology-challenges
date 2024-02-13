import { useState, useRef } from "react";

const SearchBar = ({ formSubmit }) => {
  //   const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    formSubmit(inputValue);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search"
        ref={inputRef}
        // onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
