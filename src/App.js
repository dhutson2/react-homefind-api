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

  // getPriceRange = async () => {
  //   try {
  //     const prices = await fetch(
  //       "https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=f947e577f8d86995ab127ed14e2ebcb4&$filter=ListPrice%20gt%20900000"
  //     );
  //     const pricesJson = await prices.json();
  //     return pricesJson;
  //   } catch (err) {
  //     console.log(err, "getPriceRange error");
  //     return err;
  //   }
  // };

  handleSearchSubmit = async data => {
    try {
      const search = await fetch(
        "https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=f947e577f8d86995ab127ed14e2ebcb4" +
          "&$filter=Stories%20eq%202"
      );
      const parsedSearch = await search.json();
      console.log(parsedSearch, "<-- parsed home search");
    } catch (err) {
      console.log(err, "<--handleSearchSubmit error");
      return err;
    }
  };

  // componentDidMount() {
  //   this.getHouses().then(houseData => {
  //     this.setState({
  //       houses: houseData
  //     });
  //     console.log(this.state, "<--state in main app");
  //   });
  //   // this.getPriceRange().then(priceData => {
  //   //   console.log("Price data:", priceData);
  //   //   this.setState({
  //   //     priceRange: priceData
  //   //   });
  //   // });
  // }

  render() {
    return (
      <div>
        <Finder
          searchSubmit={this.handleSearchSubmit}
          getHouses={this.getHouses}
          houses={this.state.houses}
        />
      </div>
    );
  }
}

export default App;
