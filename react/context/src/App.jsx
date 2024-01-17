import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home/Home";
import { useState } from "react";
import SearchContextProvider from "./context/SearchContextProvider";
import DarkModeContextProvider from "./context/DarkModeContextProvider";
import NavBar from "./components/NavBar/NavBar";
import UsernameContextProvider from "./context/UsernameContextProvider";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    // <>
    <SearchContextProvider>
      <DarkModeContextProvider>
        <UsernameContextProvider>
          <NavBar />
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Home searchTerm={searchTerm} />
        </UsernameContextProvider>
      </DarkModeContextProvider>
    </SearchContextProvider>
    // </>
  );
}

export default App;
