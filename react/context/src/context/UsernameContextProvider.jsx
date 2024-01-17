import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const UsernameContext = createContext(null);

const UsernameContextProvider = ({ children }) => {
  const [username, setUsername] = useState("Mitch-Hawkins");

  const dataForChildren = { username, setUsername };

  return (
    <UsernameContext.Provider value={dataForChildren}>
      {children}
    </UsernameContext.Provider>
  );
};

export default UsernameContextProvider;
