import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "./finder.css";

class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      city: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      stories: ""
    };
  }

  handleSearchSubmit = e => {
    e.preventDefault();
    return this.props.searchSubmit(this.state);
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSearchSubmit}>
        <strong>Tell us what you want to find in a home!</strong>
        <Form.Field>
          <label>What city do you want to look in?</label>
          <input
            type="text"
            name="city"
            id="city"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>What price do you want to be at?</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>How many bedrooms do you want?</label>
          <input
            type="text"
            name="bedrooms"
            id="bedrooms"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>How many bathrooms do you want?</label>
          <input
            type="text"
            name="bathrooms"
            id="bathrooms"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>How many stories do you want?</label>
          <input
            type="text"
            name="stories"
            id="stories"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Finder;
