import React from "react";
import { connect } from "react-redux";
import {
    View,
} from "react-native";
import store from "../redux/store";
import AsyncStorage from '@react-native-community/async-storage';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.getData();
        this.state = {
            isLoading: true,
            infosPots: [],
        };
    }


    componentDidUpdate() {
        if (store.getState().isLogged.isLoggedIn) {
            this.props.navigation.navigate('HomeConnected');
        } else {
            this.props.navigation.navigate('HomeNotConnected');
        }
    }

    getData = async () => {
        try {
            const values = await AsyncStorage.multiGet(['userID', 'login']);
            if(values !== null){
                store.dispatch({ type: "SET_ID", value: JSON.parse(values[0][1])});
                store.dispatch({ type: "LOGIN", value: JSON.parse(values[1][1])});
            }
        } catch (error) {
            alert(error);
        }
    }

    componentDidMount() {
        if (store.getState().isLogged.isLoggedIn) {
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