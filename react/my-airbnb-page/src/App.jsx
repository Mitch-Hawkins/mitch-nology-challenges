import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Listingcard from "./components/Listingcard/Listingcard";
import Cardcontainer from "./components/Cardcontainer/Cardcontainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Cardcontainer />
    </>
  );
}

export default App;
