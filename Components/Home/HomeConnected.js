import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
} from "react-native";
import Svg, {Ellipse} from "react-native-svg";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSun, faTint} from "@fortawesome/free-solid-svg-icons";
import ProgressCircle from "react-native-progress-circle";
import {
    getDataByIDFromApi,
    getPlantsByIDFromApi,
    getPotsByIDFromApi, getPotsByUserIDFromApi,
} from "../../GetDataFromApi/GetDataFromApi";
import {connect} from "react-redux";
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
        getPotsByUserIDFromApi(this.props.id).then(data =>  {
            this.setState({
                infosPots: data,
                isLoading: false,
            })
            console.log(data[0]);
        });
    }

    render() {
        return (
            <View>
                {this.state.infosPots.length > 0 && <HomeConnectedWithPot/>}
                {this.state.infosPots.length < 1 && <HomeConnectedWithoutPot/>}
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