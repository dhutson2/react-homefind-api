import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "./finder.css";

class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Form>
        <strong>Tell us what you want to find in a home!</strong>
        <Form.Field>
          <label>What city do you want to look in?</label>
          <input placeholder="City" />
        </Form.Field>
        <Form.Field>
          <label>What price do you want to be at?</label>
          <input placeholder="Price" />
        </Form.Field>
        <Form.Field>
          <label>How many bedrooms do you want?</label>
          <input placeholder="Bedrooms" />
        </Form.Field>
        <Form.Field>
          <label>How many bathrooms do you want?</label>
          <input placeholder="Bathrooms" />
        </Form.Field>
        <Form.Field>
          <label>How many stories do you want?</label>
          <input placeholder="Stories" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Finder;
