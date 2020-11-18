import React from "react";
import HomeNotConnected from "../Components/Home/HomeNotConnected";
import { connect } from "react-redux";
import {
    View,
} from "react-native";
import HomeConnected from "../Components/Home/HomeConnected";

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            infosPots: [],
        };
    }

    render() {
        return (
            <View>
                {this.props.isLoggedIn && this.props.navigation.navigate('HomeConnected')}
                {!this.props.isLoggedIn && this.props.navigation.navigate('HomeNotConnected')}
            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.storeUserId.id,
        isLoggedIn: state.isLogged.isLoggedIn
    }
}

export default connect(mapStateToProps)(LoginControl)