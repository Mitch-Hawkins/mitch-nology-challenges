import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext(null);

const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <DarkModeContext.Provider
            value={{ darkMode, setDarkMode, moreTSuff: "more stuff" }}
        >
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeContextProvider;
