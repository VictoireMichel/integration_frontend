import HomeConnectedWithPot from "../Components/Home/HomeConnectedWithPot";
import React from "react";
import HomeNotConnected from "../Components/Home/HomeNotConnected";
import {connect} from "react-redux";
import {getPotsByUserIDFromApi, getPotsFromApi} from "../GetDataFromApi/GetDataFromApi";
import HomeConnectedWithoutPot from "../Components/Home/HomeConnectedWithoutPot";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
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
        return(
            <View>
                {this.props.isLoggedIn && <HomeConnected/>}
                {!this.props.isLoggedIn && <HomeNotConnected/>}
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