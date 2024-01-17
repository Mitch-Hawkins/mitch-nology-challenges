import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Quantity from "./components/Quantity/Quantity";
import Updates from "./components/Updates/Updates";
import Facts from "./components/Facts/Facts";
import Students from "./components/Students/Students";

function App() {
  return (
    <>
      <Quantity />
      {/* <Updates /> */}
      {/* <Facts /> */}
      {/* <Students /> */}
    </>
  );
}

export default App;
