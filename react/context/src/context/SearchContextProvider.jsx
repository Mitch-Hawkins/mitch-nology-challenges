// 1. Create context using a hook

import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext(null);

// this is what I will need to wrap my other components in to give them access to SearchCOntext
const SearchContextProvider = ({ children }) => {
    const [contextSearchTerm, setContextSearchTerm] = useState("");

    const dataForChildren = {
        contextSearchTerm,
        setContextSearchTerm,
        extraPropertyOfContext: "Hello",
    };
    return (
        <SearchContext.Provider value={dataForChildren}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;
