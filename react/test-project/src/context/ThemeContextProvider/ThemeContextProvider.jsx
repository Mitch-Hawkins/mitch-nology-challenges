import React from "react";

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
