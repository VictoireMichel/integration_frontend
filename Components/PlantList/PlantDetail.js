import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { getPlantsByIDFromApi } from "../../GetDataFromApi/GetDataFromApi";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import store from "../../redux/store";
const loggedIn = store.getState().isLogged.isLoggedIn;

class PlantDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idPlant: null,
      plant: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getPlantsByIDFromApi(this.props.route.params.itemId).then((data) => {
      this.setState({
        idPlant: this.props.route.params.itemId,
        plant: data,
        isLoading: false,
      });
    });
  }

  /**
   *
   * Fonction permettant d'afficher une page de loading le temps d'aller chercher les informations dans l'API.
   *
   * @returns {JSX.Element}
   *
   */
  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
  /**
   * Affiche la description de la plante
   */
  _displayDescriptionDetail() {
    const plant = this.state.plant;
    if (plant.length > 0) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <View style={{ flex: 1, marginBottom: 10, flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "center", elevation: 8 }}>
              <View
                style={{
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text
                  style={{ fontSize: 20, color: "#f1f1f1", fontWeight: "bold", textDecorationLine: 'underline', fontFamily: "sans-serif-thin" }}>
                  Description
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 4 }}>
            <Text style={{ fontSize: 14, color: "#f1f1f1", textAlign: "justify", fontFamily: "sans-serif-thin" }}>
              {plant[0].description}
            </Text>
          </View>
        </View>
      );
    }
  }
  /**
   * Affiche l'entretien' de la plante
   */
  _displayEntretienDetail() {
    const plant = this.state.plant;
    if (plant.length > 0) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            paddingLeft: 20,
            paddingRight: 20
          }}>
          <View style={{ flex: 1, marginBottom: 10, flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "center", elevation: 8 }}>
              <View
                style={{
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text
                  style={{ fontSize: 20, color: "#f1f1f1", fontWeight: "bold", textDecorationLine: 'underline', fontFamily: "sans-serif-thin" }}>
                  Entretien
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 4 }}>
            <Text style={{ fontSize: 14, color: "#f1f1f1", textAlign: "justify", fontFamily: "sans-serif-thin" }}>
              {plant[0].maintenance}
            </Text>
          </View>
        </View>
      );
    }
  }
  /**
   * Affiche la croissance de la plante
   */
  _displayCroissanceDetail() {
    const plant = this.state.plant;
    if (plant.length > 0) {
      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              style={{ width: 80, height: 60 }}
              source={require("../../Picture/croissance.png")}
            />
          </View>

          <View style={{ flex: 1, flexDirection: "column", marginRight: 20 }}>
            <View
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 18, color: "#f1f1f1", fontFamily: "serif" }}>Croissance</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}>
              <Text style={{ fontSize: 14, color: "#f1f1f1", fontFamily: "serif" }}>
                {plant[0].growTime} jours
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }
  /**
   * Affiche le type de sol de la plante
   */
  _displaySolDetail() {
    const plant = this.state.plant;
    if (plant.length > 0) {
      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../Picture/croissancePlante.png")}
            />
          </View>

          <View style={{ flex: 1, flexDirection: "column", marginRight: 18 }}>
            <View
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 18, color: "#f1f1f1", fontFamily: "serif" }}>Type de sol</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}>
              <ScrollView style={{ marginBottom: 5 }}>
                <Text style={{ fontSize: 14, color: "#f1f1f1", fontFamily: "serif" }}>
                  {plant[0].soil}
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
      );
    }
  }
  /**
   * Affiche la luminosité demandée de la plante
   */
  _displayLuminositeDetail() {
    const plant = this.state.plant;
    if (plant.length > 0) {
      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../Picture/soleil.png")}
            />
          </View>

          <View style={{ flex: 1, flexDirection: "column", marginRight: 18 }}>
            <View
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 18, color: "#f1f1f1", fontFamily: "serif" }}>Exposition</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}>
              <ScrollView style={{ marginBottom: 5 }}>
                <Text style={{ fontSize: 14, color: "#f1f1f1", fontFamily: "serif" }}>
                  {(plant[0].luminosity === 0) ? (<Text>Ombre</Text>) : (plant[0].luminosity === 1) ?
                    (<Text>Mi-ombre</Text>) :
                    (<Text>Soleil</Text>)}
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
      );
    }
  }
  /**
   * Affiche le nom de la plante
   */
  _displayNamePlant() {
    const plant = this.state.plant;
    if (plant.length > 0) {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              color: "#f1f1f1",
              fontSize: 32,
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "serif"
            }}>
            {plant[0].name}
          </Text>
        </View>
      );
    }
  }
  /**
   * Affiche l'image de la plante
   */
  _displayPicturePlant() {
    const plant = this.state.plant;
    if (plant.length > 0) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: 140,
              height: 110,
              padding: 4,
              marginLeft: 15,
            }}>
            <Image
              style={styles.image}
              source={{
                uri: "https://pi2-ephec.herokuapp.com/files/" + plant[0].picturePath,
              }}
            />
          </View>
        </View>
      );
    }
  }

  _displayArrowGoBack() {
    return (
      <View style={{ width: "100%", height: 20, justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "#f1f1f1", margin: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  _displayAddPotButton() {
      console.log(this.state.idPlant)
    console.log('--------------------')
    return (
      <View>

          {store.getState().isLogged.isLoggedIn ? (
          <TouchableOpacity
            style={{
              width: 130,
              height: 30,
              backgroundColor: "#373b44",
              borderRadius: 15,
              elevation: 8,
              margin: 3,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "flex-end",
            }}
            onPress={() => {
              this.props.navigation.navigate("addPotForm", this.state.idPlant);
            }}>
            <Text style={{ fontSize: 14, color: "#f1f1f1" }}>+ Ajouter au pot</Text>
          </TouchableOpacity>
        ) : (null)}

      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <LinearGradient
          colors={["#588B43", "#373b44"]}
          style={{
            flex: 14,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            elevation: 8,
          }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>{this._displayArrowGoBack()}</View>

            <View style={{ flex: 1, marginRight: 30 }}>
              {this._displayAddPotButton()}
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "column" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}>
              {this._displayNamePlant()}
              {this._displayPicturePlant()}
            </View>
            <View style={{ flex: 3, paddingBottom: 12 }}>
              <ScrollView>
                {this._displayDescriptionDetail()}
                {this._displayEntretienDetail()}
              </ScrollView>
            </View>
          </View>
        </LinearGradient>

        <View style={{ flex: 4 }}>
          <View style={{ height: 120, marginTop: 10 }}>
            <ScrollView horizontal>
              <View style={styles.itemScrollView}>
                {this._displayCroissanceDetail()}
              </View>
              <View style={styles.itemScrollView}>
                {this._displaySolDetail()}
              </View>
              <View style={styles.itemScrollView}>
                {this._displayLuminositeDetail()}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  itemScrollView: {
    width: 210,
    height: 100,
    backgroundColor: "#373b44",
    marginBottom: 15,
    marginLeft: 20,
    borderRadius: 15,
    elevation: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    id: state.storeUserId.id,
    isLoggedIn: state.isLogged.isLoggedIn
  }
}

export default connect(mapStateToProps)(PlantDetail)