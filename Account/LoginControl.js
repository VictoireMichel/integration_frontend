import React from "react";
import { connect } from "react-redux";
import {
    View,
} from "react-native";

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            infosPots: [],
        };
    }


    componentDidUpdate() {
        if (this.props.isLoggedIn) {
            this.props.navigation.navigate('HomeConnected');
        } else {
            this.props.navigation.navigate('HomeNotConnected');
        }
    }

    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.props.navigation.navigate('HomeConnected');
        } else {
            this.props.navigation.navigate('HomeNotConnected');
        }
    }

    render() {
        return (
            <View>
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