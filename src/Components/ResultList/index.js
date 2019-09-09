import React, { Component } from "react";
import { List } from "semantic-ui-react";
import "./results.css";

class ResultsList extends Component {
  constructor() {
    super();
    this.state = {
      houses: [],
      city: "Denver",
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

  getHouses = async () => {
    try {
      const houses = await fetch(
        "https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=f947e577f8d86995ab127ed14e2ebcb4"
      );
      const housesJson = await houses.json();
      console.log(housesJson, "<--houses json");
      this.setState(
        {
          houses: housesJson.value
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

  componentDidMount() {
    this.getHouses();
  }

  // #TODO: Import values from import form on finder to match state here,
  // Then set params of query to state values

  // #TODO: map out values of different house values into form below
  render() {
    const houseCities = this.state.houses.map(house => {
      return <li>{house.City}</li>;
    });
    const housePrices = this.state.houses.map(house => {
      return <li>{house.ListPrice}</li>;
    });
    const houseBeds = this.state.houses.map(house => {
      return <li>{house.BedroomsTotal}</li>;
    });
    const houseBaths = this.state.houses.map(house => {
      return <li>{house.BathroomsTotalDecimal}</li>;
    });
    const houseStories = this.state.houses.map(house => {
      return <li>{house.Stories}</li>;
    });
    return (
      <List className="list">
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/rachel.png" /> */}
          <List.Content>
            <List.Header as="a">Here is what we found!</List.Header>
            <List.Description>Home image</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/rachel.png" /> */}
          <List.Content>
            <List.Header as="a">City:</List.Header>
            <List.Description>{houseCities}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/lindsay.png" /> */}
          <List.Content>
            <List.Header as="a">Price:</List.Header>
            <List.Description>{housePrices}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/matthew.png" /> */}
          <List.Content>
            <List.Header as="a">Bedrooms:</List.Header>
            <List.Description>{houseBeds}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/jenny.jpg" /> */}
          <List.Content>
            <List.Header as="a">Bathrooms:</List.Header>
            <List.Description>{houseBaths}</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/veronika.jpg" /> */}
          <List.Content>
            <List.Header as="a">Stories:</List.Header>
            <List.Description>{houseStories}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default ResultsList;
