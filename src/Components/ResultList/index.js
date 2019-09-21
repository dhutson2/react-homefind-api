import React, { Component } from "react";
import { List } from "semantic-ui-react";
import "./results.css";

class ResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      zip: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      stories: "",
      submitted: false
    };
  }

  // function to call Bridge API to get houses based on user specifications
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
          zip: this.props.zip,
          price: this.props.price,
          bedrooms: this.props.bedrooms,
          bathrooms: this.props.bathrooms,
          stories: this.props.stories,
          submitted: true
        },
        () => {
          console.log(this.state, "<-- state in results list after submit");
          console.log(
            this.state.houses[0].Media[0].MediaURL,
            "<-- houses in results"
          );
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

  render() {
    const houseCityAndPrice =
      this.state.houses.length > 0
        ? this.state.houses.map(house => {
            return (
              <div>
                <li>
                  {house.City}, ${house.ListPrice} {house.Media.MediaURL}
                </li>
                <img
                  src={house.Media.length > 0 ? house.Media[0].MediaURL : null}
                  alt="house"
                  className="houseImages"
                ></img>
              </div>
            );
          })
        : null;
    // const houseImages = this.state.houses.map(house => {
    //   return (
    //     <img
    //       src="https://s3.amazonaws.com/retsly-importd-production/test_data/listings/17.jpg"
    //       alt="house"
    //     ></img>
    //   );
    // });
    return (
      <List className="list">
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/rachel.png" /> */}
          <List.Content>
            <List.Header as="a" className="header">
              Here is what we found!
            </List.Header>
            <List.Description id="item">
              All of these houses have {this.state.bedrooms} bedrooms,
              {this.state.bathrooms} bathrooms, and are {this.state.stories}{" "}
              stories.
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          {/* <Image avatar src="/images/avatar/small/rachel.png" /> */}
          <List.Content>
            <List.Header as="a" className="header">
              City and listing price: (less than ${this.state.price})
            </List.Header>
            <List.Description id="item">{houseCityAndPrice}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default ResultsList;
