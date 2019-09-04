import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Finder from "./Components/Finder/index";
import ResultsList from "./Components/ResultList/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      priceRange: []
    };
  }

  getHouses = async () => {
    try {
      const houses = await fetch(
        "https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=f947e577f8d86995ab127ed14e2ebcb4"
      );
      const housesJson = await houses.json();
      return housesJson;
    } catch (err) {
      console.log(err, "getHouses error");
      return err;
    }
  };

  getPriceRange = async () => {
    try {
      const prices = await fetch(
        "https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=f947e577f8d86995ab127ed14e2ebcb4&$filter=ListPrice%20gt%20900000"
      );
      const pricesJson = await prices.json();
      return pricesJson;
    } catch (err) {
      console.log(err, "getPriceRange error");
      return err;
    }
  };

  componentDidMount() {
    this.getHouses().then(houseData => {
      console.log("Houses data: ", houseData);
      this.setState({
        houses: houseData
      });
    });
    this.getPriceRange().then(priceData => {
      console.log("Price data:", priceData);
      this.setState({
        priceRange: priceData
      });
    });
  }

  render() {
    return (
      <div>
        <Finder />
        <ResultsList />
      </div>
    );
  }
}

export default App;
