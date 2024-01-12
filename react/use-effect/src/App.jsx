import "./App.css";
import { useState, useEffect } from "react";
import RandomUserCard from "./components/RandomUserCard/RandomUserCard";
import { fetchUserData } from "./data/getUserData";
import SearchBar from "./components/SearchBar/SearchBar";
import RandomUsersList from "./containers/RandomUsersList/RandomUsersList";

function App() {
  const [loading, setLoading] = useState(false);

  // fetch data about the user
  // pass it as props to the card
  // render the card once I have the data

  // I need a place to store user info
  const [userData, setUserData] = useState([]);
  //   const [number, setNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState(0);

  // make the API call when I first open the page

  // js function that fetches data and returns data

  useEffect(() => {
    // State is asynchronous, it will always be one step behind until it leaves the function, we need time for it to happen. WE can never access the most up to date state in the same function we are setting it in.
    setLoading(true);
    fetchUserData(searchTerm).then((result) => {
      setUserData(result);
      setLoading(false);
      console.log(result);
    });
  }, [searchTerm]);

  return (
    <>
      <h1>React useEffect</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading && <p>Loading...</p>}
      {!loading && userData && <RandomUsersList userData={userData} />}
    </>
  );
}

export default App;
