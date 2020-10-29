import React from "react";
import {Body, Button, Header, Icon, Left, Title} from "native-base";
import {Text} from "react-native";

export default class CustomHeader extends React.Component{
    render() {
        return(
            <Header style={{backgroundColor:'#588B43'}} androidStatusBarColor="#588B43">
                <Left>
                    <Button transparent><Icon name="menu" style={{color:"#fff"}} onPress={() => this.props.nav.openDrawer()}/></Button>
                </Left>
                <Body >
                    <Text style={{color:'#f1f1f1', fontSize:20, paddingLeft:40}}>eGrow</Text>
                </Body>
            </Header>
        )
    }
}
