import React from "react";
import {Text, View, StyleSheet, Button, Image, ScrollView} from "react-native";
import ItemInfo from "./ItemInfo";
import ConfirmDialog from "./ConfirmDialog";

class MyPlantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infosPot: this.props.route.params.infosPots,
      infosData: this.props.route.params.infosData[0],
      infosPlant: this.props.route.params.infosPlant[0],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://pi2-ephec.herokuapp.com/files/" +
                  this.state.infosPlant.picturePath,
              }}
            />
          </View>
          <Text style={styles.title}>{this.state.infosPot.name}</Text>
        </View>
        <Text style={styles.headInfos}>
          {this.state.infosPlant.name} - planté(e) il y a{" "}
          {this.state.infosPot.dayCount} jours
        </Text>
        <View style={styles.line} />
        <View>
          <Text style={styles.headInfos}>
            {dateFormat(this.state.infosData.timeStamp)}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <ScrollView>
            <ItemInfo
              itemTitle="Luminosité"
              dataProgress={this.state.infosData.dataLuminosity}
              color="#E1BC31"
              icon="faSun"
              dataWanted={
                "attendue : " +
                (this.state.infosPlant.luminosity * 25 + 25) +
                "%"
              }
            />
            <ItemInfo
              itemTitle="Humidité"
              dataProgress={this.state.infosData.dataHumidity}
              color="#70BDD9"
              icon="faTint"
              dataWanted={"attendue : " + this.state.infosPlant.humidity + "%"}
            />
            <ItemInfo
              itemTitle="Température"
              dataProgress={this.state.infosData.dataTemperature}
              color="brown"
              icon="faThermometerThreeQuarters"
              dataWanted={
                "minimum : " + this.state.infosPlant.temperatureMin + "°C"
              }
            />
            <ConfirmDialog idPot={this.state.infosPot.id} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

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
};

export default MyPlantInfo;

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
    justifyContent: "flex-end",
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
