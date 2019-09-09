import React, { Component } from "react";
import { Button, Checkbox, Form, List } from "semantic-ui-react";
import "./finder.css";
import ResultsList from "../ResultList/index";

class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      city: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      stories: "",
      submitted: false
    };
  }

  getHouses = async () => {
    try {
      const houses = await fetch(
        "https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=f947e577f8d86995ab127ed14e2ebcb4" +
          "&$filter=contains(City, 'Potrero')"
      );
      const housesJson = await houses.json();
      console.log(housesJson, "<--houses json");
      this.setState(
        {
          houses: housesJson.value,
          city: this.props.city
        },
        () => {
          console.log(this.state, "<-- state in results list");
        }
      );
    } catch (err) {
      console.log(err, "getHouses error");
      return err;
    }
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    this.setState({
      submitted: true
    });
    console.log(this.state, "<-- state in finder after submit");
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <ResultsList
            houses={this.state.houses}
            handleChange={this.handleChange}
            gethouses={this.getHouses}
            {...this.state}
          />
        ) : (
          <Form onSubmit={this.handleSearchSubmit}>
            <strong>Tell us what you want to find in a home!</strong>
            <Form.Field id="find-field">
              <label className="label">What city do you want to look in?</label>
              <input
                type="text"
                name="city"
                id="city"
                onChange={this.handleChange}
                className="input"
              />
            </Form.Field>
            <Form.Field id="find-field">
              <label className="label">What price do you want to be at?</label>
              <input
                type="text"
                name="price"
                id="price"
                onChange={this.handleChange}
                className="input"
              />
            </Form.Field>
            <Form.Field id="find-field">
              <label className="label">How many bedrooms do you want?</label>
              <input
                type="text"
                name="bedrooms"
                id="bedrooms"
                onChange={this.handleChange}
                className="input"
              />
            </Form.Field>
            <Form.Field id="find-field">
              <label className="label">How many bathrooms do you want?</label>
              <input
                type="text"
                name="bathrooms"
                id="bathrooms"
                onChange={this.handleChange}
                className="input"
              />
            </Form.Field>
            <Form.Field id="find-field">
              <label className="label">How many stories do you want?</label>
              <input
                type="text"
                name="stories"
                id="stories"
                onChange={this.handleChange}
                className="input"
              />
            </Form.Field>
            <Button type="submit" className="buttons">
              Submit
            </Button>
          </Form>
        )}
      </div>
    );
  }
}

export default Finder;
