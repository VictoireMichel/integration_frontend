import React, {Component} from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import {delPotsByIDFromApi} from "../../GetDataFromApi/GetDataFromApi";

class ConfirmDialog extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Êtes-vous sûr de vouloir supprimer le pot ?
              </Text>
              <View style={styles.modalButtons}>
                <TouchableHighlight
                  style={styles.yesNoButton}
                  onPress={() => {
                    delPotsByIDFromApi(this.props.idPot)
                      .then(() => {
                        this.setModalVisible(!modalVisible);
                        this.props.navigation.navigate(
                          "HomeConnectedWithoutPot",
                        );
                      })
                      .catch((error) => {
                        console.log("errorDeletePot ", error);
                      });
                  }}>
                  <Text style={styles.textStyle}>Oui</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.yesNoButton}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>non</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Supprimer le pot</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: "5%",
    height: "20%",
  },
  modalView: {
    height: "20%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 100,
  },
  openButton: {
    backgroundColor: "lightcoral",
    flex: 1,
    width: "100%",
    paddingTop: "4%",
    paddingBottom: "4%",
    borderRadius: 20,
    marginBottom: "5%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop: "3%",
    marginLeft: "5%",
    marginRight: "5%",
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  yesNoButton: {
    padding: "5%",
    margin: "5%",
    width: "30%",
    borderRadius: 20,
    backgroundColor: "green",
  },
});

export default ConfirmDialog;
