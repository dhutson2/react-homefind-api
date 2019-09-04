import React from "react";
import { List, Image } from "semantic-ui-react";

const ResultsList = () => (
  <List>
    <List.Item>
      {/* <Image avatar src="/images/avatar/small/rachel.png" /> */}
      <List.Content>
        <List.Header as="a">Rachel</List.Header>
        <List.Description>Last seen just now.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      {/* <Image avatar src="/images/avatar/small/lindsay.png" /> */}
      <List.Content>
        <List.Header as="a">Lindsay</List.Header>
        <List.Description>Last seen 10 hours ago.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      {/* <Image avatar src="/images/avatar/small/matthew.png" /> */}
      <List.Content>
        <List.Header as="a">Matthew</List.Header>
        <List.Description>Last seen yesterday.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      {/* <Image avatar src="/images/avatar/small/jenny.jpg" /> */}
      <List.Content>
        <List.Header as="a">Jenny Hess</List.Header>
        <List.Description>Last seen 3 days ago.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      {/* <Image avatar src="/images/avatar/small/veronika.jpg" /> */}
      <List.Content>
        <List.Header as="a">Veronika Ossi</List.Header>
        <List.Description>Has not watched anything recently</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default ResultsList;
