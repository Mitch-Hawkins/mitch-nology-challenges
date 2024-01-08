import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Home from "./containers/Home/Home";
import CardWithDynamicData from "./components/CardWithDynamicData/CardWithDynamicData";

function App() {
  // we write js here
  return (
    // react fragments
    // React.Fragment allows to add attributes, like key
    //<></> doesn't let you add attiributes
    // <React.Fragment>
    <>
      <Header />
      <Home />
      <CardWithDynamicData title="1st Card Title" />
      <CardWithDynamicData title="2nd Card Title" />
      <CardWithDynamicData title="3rd Card Title" />
      <CardWithDynamicData title="4th Card Title" />
    </>
  );
}

export default App;
