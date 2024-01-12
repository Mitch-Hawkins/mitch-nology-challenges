// Search after click a button

//LOOK UP DEBOUNCE

// Searchbar is a form
import { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(""); //creates a new state variable called inputVariable with the setter function as setInputVariable and a default value of a blank string

  const handleFormSubmit = (e) => {
    //declares a function designed to set the searchTerm state variable from the App.jsx to equal the inputValue state variable
    e.preventDefault();
    console.log("Form submitted");
    setSearchTerm(inputValue);
  };

  const handleInputChange = (e) => {
    //declares a function desgined to set the inputValue state variable to what has been written in the text input (the event.target)
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {" "}
      {/* Calls handleFormSubmit when the form is submitted */}
      <input type="text" onChange={handleInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
