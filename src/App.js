import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Finder from "./Components/Finder/index";
import ResultsList from "./Components/ResultList/index";

function App() {
  return (
    <div>
      <Finder />
      <ResultsList />
    </div>
  );
}

export default App;
