import React from "react";
import { Body, Button, Header, Icon, Left, Title } from "native-base";
import { Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class CustomHeader extends React.Component {
  render() {
    return (
      <Header style={{ backgroundColor: "#588B43" }} androidStatusBarColor="#588B43">
        <Left>
          <Button transparent>
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} size={20} onPress={() => this.props.nav.openDrawer()} />
          </Button>
        </Left>
        <Body >
          <Text style={{ color: "#f1f1f1", fontSize: 20, paddingLeft: 52 }}>eGrow</Text>
        </Body>
      </Header>
    );
  }
}
