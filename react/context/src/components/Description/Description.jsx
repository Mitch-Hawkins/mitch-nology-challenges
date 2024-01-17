import { useContext } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import { DarkModeContext } from "../../context/DarkModeContextProvider";

const Description = ({ searchTerm }) => {
    console.log(useContext(SearchContext));
    const { contextSearchTerm } = useContext(SearchContext);

    const { setDarkMode, darkMode } = useContext(DarkModeContext);

    console.log(darkMode, "darkmode");
    return (
        <div>
            <p>You searched for: {contextSearchTerm}</p>
            <button onClick={() => setDarkMode(!darkMode)}>
                Change to {darkMode ? "light mode" : "dark mode"}
            </button>
        </div>
    );
};

export default Description;
