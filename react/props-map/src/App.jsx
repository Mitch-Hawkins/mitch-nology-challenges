import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import StudentList from "./containers/StudentList/StudentList";
import FlexWrapper from "./containers/FlexWrapper/FlexWrapper";

function App() {
  return (
    <>
      <h1>React props</h1>
      <FlexWrapper direction="row">
        <StudentList />
      </FlexWrapper>
    </>
  );
}

export default App;
