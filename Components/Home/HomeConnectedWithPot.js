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
import Svg, { Ellipse } from "react-native-svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSun, faTint } from "@fortawesome/free-solid-svg-icons";
import ProgressCircle from "react-native-progress-circle";
import {
  getDataByIDFromApi,
  getPlantsByIDFromApi,
  getPotsByUserIDFromApi,
} from "../../GetDataFromApi/GetDataFromApi";
import { connect } from "react-redux";
import store from "../../redux/store";

class HomeConnectedWithPot extends React.Component {
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

  /**
   * Fonction récupérant les données du pot de la base de données
   */
  componentDidMount() {
    getPotsByUserIDFromApi(store.getState().storeUserId.id).then((data) => {
      this.setState({
        infosPots: data[0],
        isLoading: false,
      });
      getPlantsByIDFromApi(this.state.infosPots.plantId).then((data) => {
        this.setState({
          infosPlant: data,
          isLoading: false,
        });
      });
      getDataByIDFromApi(1).then((data) => { // this.state.infosPots.id
        this.setState({
          infosData: data,
          isLoading: false,
        });
      });
    }).catch(error => console.log('erreur getPotByUserIdFromApi', error));
  }

  /**
   * Fonction qui récupère et affiche la durée de vie de la plante
   */
  _displayDayCount() {
    return (
      <ProgressCircle
        style={styles.ball}
        percent={this.state.infosPots.dayCount} // ici => données de la plante qu'on devra récupérer
        radius={31}
        borderWidth={4}
        color="#A2A2A2"
        shadowColor="#E6E6E6"
        bgColor="#FFFFFF">
        <Text style={styles.age}>{this.state.infosPots.dayCount + " jours"}</Text>
      </ProgressCircle>
    );
  }

  /**
   * Fonction qui récupère et affiche l'humidité de la plante
   */
  _displayDataHum() {
    const data = this.state.infosData;
    if (data.length > 0) {
      return (
        <ProgressCircle
          style={styles.ball}
          percent={data[0].dataHumidity} // ici => données de la plante qu'on devra récupérer
          radius={31}
          borderWidth={4}
          color="#70BDD9"
          shadowColor="#E6E6E6"
          bgColor="#FFFFFF">
          <FontAwesomeIcon style={styles.water} icon={faTint} size={25} />
        </ProgressCircle>
      );
    }
  }

  /**
   * Fonction qui récupère et affiche la luminosité de la plante
   */
  _displayDataLum() {
    const data = this.state.infosData;
    if (data.length > 0) {
      return (
        <ProgressCircle
          style={styles.ball}
          percent={data[0].dataLuminosity} // ici => données de la plante qu'on devra récupérer
          radius={31}
          borderWidth={4}
          color="#E1BC31"
          shadowColor="#E6E6E6"
          bgColor="#FFFFFF">
          <FontAwesomeIcon style={styles.sun} icon={faSun} size={25} />
        </ProgressCircle>
      );
    }
  }
  /**
   * Fonction qui récupère et affiche le nom de la plante
   */
  _displayName() {
    const plant = this.state.infosPlant;
    if (plant.length > 0) {
      return <Text style={styles.title}>{plant[0].name}</Text>;
    }
  }

  /**
   * Fonction qui récupère et affiche la photo de la plante
   */
  _displayPic() {
    const plant = this.state.infosPlant;
    if (plant.length > 0) {
      return (
        <Image
          resizeMode="cover"
          style={styles.pic}
          source={{
            uri: "https://pi2-ephec.herokuapp.com/files/" + plant[0].picturePath,
          }}
        />
      );
    }
  }

  render() {
    return (

      <View style={styles.background}>
        {this.state.isLoading ? (
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" color="#005B00" />
          </View>
        ) : (
            <View style={styles.container}>
              <View>
                <Svg style={styles.ball1}>
                  <Ellipse
                    fill="rgba(230, 230, 230,1)"
                    cx={68}
                    cy={68}
                    rx={68}
                    ry={68}
                  />
                </Svg>
                {this._displayName()}
                <View style={styles.line} />
                {this._displayPic()}
              </View>
              <View style={styles.container2}>
                <View style={styles.container3}>{this._displayDataHum()}</View>
                <View style={styles.container3}>{this._displayDayCount()}</View>
                <View style={styles.container3}>{this._displayDataLum()}</View>
              </View>
            </View>
          )}
        {this.state.isLoading ? (
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" color="#005B00" />
          </View>
        ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                console.log(" testclik ");
                this.props.navigation.navigate("Details", {
                  itemId: this.state.infosPots.id,
                  infosPots: this.state.infosPots,
                  infosData: this.state.infosData,
                  infosPlant: this.state.infosPlant
                });
              }}>
              <View style={styles.text_container}>
                <Text style={styles.text}>Plus d'infos</Text>
              </View>
            </TouchableOpacity>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  container: {
    marginTop: "10%",
    flex: 0,
    backgroundColor: "#284F35",
    height: 350,
    width: 300,
    borderRadius: 20,
    shadowColor: "#1E3927",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // android
    elevation: 8,
    position: "relative",
  },
  container2: {
    marginTop: "auto",
    backgroundColor: "#284F35",
    height: 100,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  container3: {
    marginTop: "auto",
    backgroundColor: "#284F35",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  ball: {
    left: 20,
    top: 16,
    marginTop: "7%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
  ball1: {
    marginTop: "7%",
    marginLeft: "27%",
    justifyContent: "center",
  },
  pic: {
    width: "45%",
    height: "50%",
    marginLeft: "27%",
    marginRight: "auto",
    marginTop: "-75.5%",
    borderRadius: 100,
  },
  title: {
    fontSize: 38,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-35%",
    color: "#FFFFFF",
  },
  line: {
    backgroundColor: "#E6E6E6",
    width: 125,
    height: 2,
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    width: 130,
    height: 35,
    backgroundColor: "#284F35",
    marginTop: "10%",
    marginBottom: "10%",
    justifyContent: "center",
    borderRadius: 16,
    shadowColor: "#1E3927",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // android
    elevation: 8,
    position: "relative",
  },
  text_container: {
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
  },
  water: {
    marginTop: "-15%",
    top: 5,
    color: "#70BDD9",
  },
  sun: {
    marginTop: "-15%",
    top: 5,
    color: "#E1BC31",
  },
  age: {
    fontSize: 13.5,
    textAlign: "center",
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});



const mapStateToProps = (state) => {
  return {
    id: state.storeUserId.id,
    isLoggedIn: state.isLogged.isLoggedIn
  }
}

export default connect(mapStateToProps)(HomeConnectedWithPot)