import React, { Component } from "react";
import { List } from "semantic-ui-react";
import "./results.css";

class ResultsList extends Component {
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
        // "https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=f947e577f8d86995ab127ed14e2ebcb4" +
        //   "&$filter=contains(City, 'Potrero')"
        `https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=f947e577f8d86995ab127ed14e2ebcb4&$filter=Stories%20eq%20${this.props.stories}%20and%20BathroomsFull%20eq%20${this.props.bathrooms}%20and%20ListPrice%20lt%20${this.props.price}%20and%20BedroomsTotal%20eq%20${this.props.bedrooms}`
      );
      const housesJson = await houses.json();
      this.setState(
        {
          houses: housesJson.value,
          city: this.props.city,
          price: this.props.price,
          bedrooms: this.props.bedrooms,
          bathrooms: this.props.bathrooms,
          stories: this.props.stories,
          submitted: true
        },
        () => {
          console.log(this.state, "<-- state in results list after submit");
        }
      );
    } catch (err) {
      console.log(err, "getHouses error");
      return err;
    }
  };

  componentDidMount() {
    this.getHouses();
  }

  // #TODO: Import values from import form on finder to match state here,
  // Then set params of query to state values

  // #TODO: map out values of different house values into form below
  render() {
    const houseCityAndPrice = this.state.houses.map(house => {
      return (
        <li>
          {house.City}, {house.ListPrice}
        </li>
      );
    });
    return (
      <List className="list">
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/rachel.png" /> */}
          <List.Content>
            <List.Header as="a">Here is what we found!</List.Header>
            <List.Description>
              All of these houses have {this.state.bedrooms} bedrooms,
              {this.state.bathrooms} bathrooms, and are {this.state.stories}{" "}
              stories.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/rachel.png" /> */}
          <List.Content>
            <List.Header as="a">
              City and listing price: (less than {this.state.price})
            </List.Header>
            <List.Description>{houseCityAndPrice}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default ResultsList;
