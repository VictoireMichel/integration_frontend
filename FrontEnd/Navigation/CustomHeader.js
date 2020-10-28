import React from "react";
import {Body, Button, Header, Icon, Left, Title} from "native-base";

function CustomHeader() {
    return(
        <Header style={{backgroundColor:'#588B43'}} androidStatusBarColor="#588B43">
            <Left>
                <Button transparent><Icon name="menu" style={{color:"#fff"}} onPress={() => alert('Todo')}/></Button>
            </Left>
            <Body style={{}}>
                <Title style={{fontFamily:'lucida grande'}}>E Grow</Title>
            </Body>

        </Header>
    )
}

export default CustomHeader;