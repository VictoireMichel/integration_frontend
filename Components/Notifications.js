import React from "react";
import {Text, View, StyleSheet, Button, Image, ScrollView} from "react-native";
import ItemInfo from "./ItemInfo";
import ConfirmDialog from "./ConfirmDialog";

class Notification extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        infosPot: this.props.route.params.infosPots,
        infosData: this.props.route.params.infosData[0],
        infosPlant: this.props.route.params.infosPlant[0],
      };
  }

  componentDidMount() {

    componentDidMount()
    {
      console.log(this.state.infosPot.id);
    }

    _luminosityNotification()
    {
      if (this.state.infosData.dataLuminosity != (this.state.infosPlant.luminosity * 25 + 25)) {
        PushNotification.localNotification({
          title: "Luminosité,
          message: "Le seuil de luminosité de votre plante est trop bas, pensez à la mettre à la lumière"
        })
      }
    }

    _humidityNotification()
    {
      if (this.state.infosData.dataHumidity < this.state.infosPlant.humidity) {
        PushNotification.localNotification({
          title: "Humidité",
          message: "Le seuil d'humidité de votre plante est trop bas, pensez à l'arroser"
        })
      }
    }
  }
}

class Notifications extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text_menu}>Mes notifications</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text_menu: {
    fontSize: 25,
    color: "red",
  },
});

export default Notifications;
