import React from "react";
import {StyleSheet, Text, View} from "react-native";

class PotDetail extends React.Component {
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

    console.log(this.state)

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

const mapStateToProps = (state) => {
  return {
    id: state.storeUserId.id,
    isLoggedIn: state.isLogged.isLoggedIn
  }
}

export default Notifications;
