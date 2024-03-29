import { useState, useEffect } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import StarshipCardList from "./containers/StarshipCardList/StarshipCardList";

function App() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [isSortedByLength, setIsSortedByLength] = useState(false);

  const fetchPageData = async () => {
    const fetchedData = await fetch(`https://swapi.dev/api/starships/`);
    const returnedData = await fetchedData.json();
    return returnedData.results;
  };

  useEffect(() => {
    setLoading(true);
    fetchPageData().then((result) => {
      setPageData(result);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <SearchBar
        setSearchTerm={setSearchTerm}
        setIsSortedByLength={setIsSortedByLength}
        isSortedByLength={isSortedByLength}
      />
      {loading && <p>Loading...</p>}
      {!loading && pageData && (
        <StarshipCardList
          pageData={pageData}
          searchTerm={searchTerm}
          isSortedByLength={isSortedByLength}
        />
      )}
    </>
  );
}

export default App;
