import React from "react";
import {
    View,
} from "react-native";
import {
    getPotsByUserIDFromApi,
} from "../../GetDataFromApi/GetDataFromApi";
import { connect } from "react-redux";
import HomeConnectedWithPot from "./HomeConnectedWithPot";
import HomeConnectedWithoutPot from "./HomeConnectedWithoutPot";


class HomeConnected extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idPot: null,
            idPlant: null,
            userId: null,
            isLoading: true,
            infosPots: [],
            infosData: [],
            infosPlant: [],
        };
    }

    componentDidMount() {
        getPotsByUserIDFromApi(this.props.id).then(data => {
            this.setState({
                infosPots: data,
                isLoading: false,
            });
        });

        if (this.state.infosPots.length > 0) {
            this.props.navigation.navigate('HomeConnectedWithPot');
        } else {
            this.props.navigation.navigate('HomeConnectedWithoutPot');
        }
    }

    componentDidUpdate() {
        if (this.state.infosPots.length > 0) {
            this.props.navigation.navigate('HomeConnectedWithPot');
        } else {
            this.props.navigation.navigate('HomeConnectedWithoutPot');
        }
    }
    componentWillUnmount() {
        if (this.state.infosPots.length > 0) {
            this.props.navigation.navigate('HomeConnectedWithPot');
        } else {
            this.props.navigation.navigate('HomeConnectedWithoutPot');
        }
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        id: state.storeUserId.id,
        isLoggedIn: state.isLogged.isLoggedIn
    }
}

export default connect(mapStateToProps)(HomeConnected)