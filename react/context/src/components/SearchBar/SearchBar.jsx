import { useContext } from "react";
import { useState } from "react";
import { SearchContext } from "../../context/SearchContextProvider";

const SearchBar = ({ setSearchTerm }) => {
    const { setContextSearchTerm } = useContext(SearchContext);
    const [inputVal, setInputVal] = useState("");

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // setSearchTerm(inputVal);
        setContextSearchTerm(inputVal);
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={inputVal} onChange={handleInputChange} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
