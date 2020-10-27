import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class PlantItem extends React.Component {
  render () {
    const { plant, displayDetailForPlant } = this.props; // ici la variable plant contient un tableau de toutes les plantes
    return (
      <TouchableOpacity
        style={styles.listItem_container}
        onPress={() => displayDetailForPlant(plant.id)}
      >
        {/**/}
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={require("../assets/Images/BASILIC-detour.png")}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.listItem_text}>{plant.name}</Text>
        </View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem_container: {
    width: 280,
    height: 90,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#F8F8F8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // its for android
    elevation: 5,
    position: "relative",
    borderRadius: 10,

    flexDirection: "row"

  },
  image_container: {
    flex: 1
  },
  image: {
    width: 100,
    height: 80,
    margin: 5
  },
  text_container: {
    flex: 1,
    justifyContent: "center"

  },
  listItem_text: {
    color: "#121212",
    fontSize: 18
  }
});

export default PlantItem;
