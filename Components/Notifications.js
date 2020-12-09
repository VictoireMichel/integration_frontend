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
      if (this.state.infosData.dataLuminosity != 1) {
        return <Text style={styles.notif}>Votre plante à besoin de lumière !</Text>;
      }
    }

    _humidityNotification()
    {
      if (this.state.infosData.dataHumidity < this.state.infosPlant.humidity) {
        return <Text style={styles.notif}>Votre plante à besoin d'eau !</Text>;
      }
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.title}>Mes notifications</Text>
          </View>
          <View style={styles.notif}>
            <text style={styles.notif}>
              {this._luminosityNotification}
            </text>
            <text style={styles.notif}>
              {this._humidityNotification}
            </text>
          </View>
        </View>


    );
  }
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex:2,
    fontSize: 25,
    color: "black",
  },
  notif: {
    flex:4,
    fontSize: 20,
    color: "red",
  }
});

export default Notifications;
