import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => setInput(event.target.value);
  const handleClick = () => console.log("Current input", input);

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </>
  );
};

export default SearchBar;
