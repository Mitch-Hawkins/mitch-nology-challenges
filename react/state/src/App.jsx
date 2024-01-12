import { useState } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResultList from "./container/SearchResultList/SearchResultList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>React state</h1>
      <SearchBar setSearchTerm={setSearchTerm} />{" "}
      {/* Renders a SearchBar component and passes setSearchTerm as a prop */}
      <SearchResultList searchTerm={searchTerm} />{" "}
      {/* Renders the search result list and passes the searchTerm state variable as a prop to the component */}
    </>
  );
}

export default App;
