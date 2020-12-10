import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView,
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSun, faTint } from "@fortawesome/free-solid-svg-icons";
import ProgressCircle from "react-native-progress-circle";
import {
  getDataByIDFromApi,
  getPlantsByIDFromApi,
  getPotsByUserIDFromApi,
} from "../GetDataFromApi/GetDataFromApi";
import { connect } from "react-redux";
import store from "../redux/store";
import Notifdisplay from "./Notifdisplay";
import ItemInfo from "./potDetails/ItemInfo"

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idPot: null,
      idPlant: null,
      userId: null,
      isLoading: true,
      isLoadingInfoData: true,
      isLoadingInfoPlant: true,
      infosPots: [],
      infosData: [],
      infosPlant: [],
    };
  }

  componentDidMount() {



    getPotsByUserIDFromApi(store.getState().storeUserId.id).then((data) => {
      this.setState({
        infosPots: data[0],
        isLoading: false,
      });
      getPlantsByIDFromApi(this.state.infosPots.plantId).then((data) => {
        this.setState({
          infosPlant: data,
          isLoadingInfoPlant: false,
        });
      });
      getDataByIDFromApi(1).then((data) => { // this.state.infosPots.id
        this.setState({
          infosData: data,
          isLoadingInfoData: false,
        });
      });
    }).catch(error => console.log('erreur getPotByUserIdFromApi', error));
  }

  _NotificationHumidit(){
    if (this.state.infosData[0].dataHumidity < 70 ){
      return ("Votre plante à besoin d'eau !")
    }
  }

  _NotificationLuminosite() {
    if (this.state.infosData[0].dataLuminosity < 2) {
      return ("Votre plante à besoin de lumière !")
    }
  }


  render() {
    if (!this.state.isLoadingInfoPlant){
      console.log("----------------------")
      console.log(this.state.infosPlant)
    }

    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Mes Notifications</Text>
          </View>
          <View style={styles.itemContainer}>
            <ScrollView>
              {this.state.isLoadingInfoData ?(<View><Text>Loading...</Text></View>):
                  (<View><Notifdisplay
                      notif={this._NotificationHumidit()}
                  ></Notifdisplay>
                    <Notifdisplay
                        notif={this._NotificationLuminosite()}
                    ></Notifdisplay></View>)}
            </ScrollView>
          </View>
        </View>
    );
  }
}

export default Notifications;

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "gainsboro",
    paddingTop: "2%",
  },
  title: {
    flex: 2,
    color: "gray",
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 35,
    marginLeft: "3%",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "gainsboro",
    flexDirection: "row",
    marginLeft: "5%",
  },
  image: {
    flex: 1,
    borderRadius: 2000,
    width: "80%",
    height: "100%",
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 1,
    marginTop: "3%",
    marginBottom: "3%",
  },
  itemContainer: {
    flex: 4,
    width: "100%",
    backgroundColor: "gainsboro",
    justifyContent: "center",
    alignContent: "center",
  },
  line: {
    flex: 0,
    height: "0.5%",
    width: "65%",
    backgroundColor: "silver",
    borderRadius: 100,
    alignSelf: "center",
    marginTop: "1%",
  },
  headInfos: {
    alignSelf: "center",
    color: "gray",
  },
  deleteButton: {
    marginTop: "5%",
    alignSelf: "center",
  },
};

const mapStateToProps = (state) => {
  return {
    id: state.storeUserId.id,
    isLoggedIn: state.isLogged.isLoggedIn
  }
}
