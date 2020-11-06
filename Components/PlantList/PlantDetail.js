import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { getPlantsByIDFromApi } from "../../GetDataFromApi/GetDataFromApi";

class PlantDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      idPlant: null,
      plant: [],
      isLoading: true
    };
  }

  componentDidMount () {
    getPlantsByIDFromApi(this.props.route.params.itemId).then(data => {
      this.setState({
        idPlant: this.props.route.params.itemId,
        plant: data,
        isLoading: false
      });
    });
  }

  /**
     *
     * Fonction affichant des informations (venant de l'API) à propos de la plante selectionnée parmi la liste des plantes.
     *
     * @returns {JSX.Element}
     *
     */
  _displayPlant () {
    const plant = this.state.plant;
    if (plant.length > 0) {
      return (
        <View style={styles.main_container}>
          <Text style={styles.nomPlante}>{plant[0].name}</Text>
          <Image
            style={styles.image}
            source={{
              uri:'http://51.77.203.95:3000/files/' + plant[0].picturePath
            }}
          />

          <Text style={styles.description_title}>Croissance(jours)</Text>
          <Text style={styles.description_text}>{plant[0].growTime}</Text>
          <Text style={styles.description_title}>Description</Text>
          <Text style={styles.description_text}>{plant[0].description}</Text>
          <Text style={styles.description_title}>Sol</Text>
          <Text style={styles.description_text}>{plant[0].soil}</Text>
          <Text style={styles.description_title}>Luminosité demandée</Text>
          <Text style={styles.description_text}>{plant[0].luminosity}</Text>
          <Text style={styles.description_title}>Entretien</Text>
          <Text style={styles.description_text}>{plant[0].maintenance}</Text>
        </View>
      );
    }
  }

  /**
     *
     * Fonction permettant d'afficher une page de loading le temps d'aller chercher les informations dans l'API.
     *
     * @returns {JSX.Element}
     *
     */
  _displayLoading () {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.main_container}>
          {this._displayLoading()}
          {this._displayPlant()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 25
  },
  image: {
    flex: 1,
    height: 150,
    width: 200,
    resizeMode: "cover"
  },
  description_text: {
    color: "#666666",
    margin: 5,
    marginBottom: 15,
    textAlign: "center",
    fontSize: 15
  },
  nomPlante: {
    fontSize: 30
  },
  description_title: {
    fontSize: 20
  }
});

export default PlantDetail;
