import React from "react";
import {
  StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, ScrollView,
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



  _NotificationHumidite() {
    if (this.state.infosData[0].dataHumidity < 70) {
      return (
        <View>
          <Text style={styles.headInfos}>
            {dateFormat(this.state.infosData[0].timeStamp)}
          </Text>
          <Notifdisplay notif="Votre plante a besoin d'eau !"></Notifdisplay>
        </View>
      );
    }
  }

  _NotificationLuminosite() {
    if (this.state.infosData[0].dataLuminosity < 2) {
      return (
        <View>
          <Text style={styles.headInfos}>
            {dateFormat(this.state.infosData[0].timeStamp)}
          </Text>
          <Notifdisplay notif="Votre plante a besoin de lumière !">
          </Notifdisplay>
        </View>
      );
    }
  }


  render() {
    if (!this.state.isLoadingInfoPlant) {
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
            {this.state.isLoadingInfoData ? (<View><Text>Loading...</Text></View>) :
              (<View>
                {this._NotificationHumidite()}
                {this._NotificationLuminosite()}
              </View>)}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Notifications;

function dateFormat(theDate) {
  const annee = theDate.substring(0, 4);
  const mois = theDate.substring(5, 7);
  const jour = theDate.substring(8, 10);
  const heure = theDate.substring(11, 13);
  const minutes = theDate.substring(14, 16);
  const secondes = theDate.substring(17, 19);
  return (
    heure +
    ":" +
    minutes +
    ":" +
    secondes +
    " " +
    jour +
    "/" +
    mois +
    "/" +
    annee
  );
}

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