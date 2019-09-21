import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Finder from "./Components/Finder/index";
import ResultsList from "./Components/ResultList/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  render() {
    return (
      <div>
        <Finder getHouses={this.getHouses} houses={this.state.houses} />
      </div>
    );
  }
}

export default App;
