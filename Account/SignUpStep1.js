import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import CustomHeader from "../Navigation/Header/CustomHeader";
import TextInput from "react-native-input-validator";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      firstName: "",
      active: true,
    };
  }

  render() {
    return (
      <View>
        <CustomHeader nav={this.props.navigation} />
        <View>
          <View style={styles.main_container}>
            <View style={styles.step}>
              <View style={styles.circleDone} />
              <View style={styles.line} />
              <View style={styles.circleToDo} />
            </View>

            <View>
              <Text style={styles.title_Screen}>Inscription</Text>
            </View>

            <View style={styles.inputView}>
              <View style={styles.icon_inputText}>
                <FontAwesomeIcon icon={faUser} />
              </View>
              <TextInput
                placeholder="Name"
                value={this.state.name}
                onChangeText={(text) => this.setState({name: text})}
                style={styles.inputText}
              />
            </View>

            <View style={styles.inputView}>
              <View style={styles.icon_inputText}>
                <FontAwesomeIcon icon={faUser} />
              </View>
              <TextInput
                placeholder="First name"
                value={this.state.firstName}
                onChangeText={(text) => this.setState({firstName: text})}
                style={styles.inputText}
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.step_button}
                onPress={() => {
                  this.props.navigation.navigate("SignUpStep2", {
                    name: this.state.name,
                    firstName: this.state.firstName,
                  });
                }}>
                <Text style={styles.stepText}>Suivant</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.info_container}>
              <Text>Vous avez déjà un compte ?</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Connexion");
                }}>
                <Text style={styles.redirect_signIn_text}>Connexion</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
  },
  main_container: {
    alignItems: "center",
    //backgroundColor: 'blue'
  },
  title_Screen: {
    marginTop: 30,
    fontSize: 35,
    color: "green",
    marginBottom: 25,
  },
  step: {
    flexDirection: "row",
    marginTop: 25,
  },
  circleDone: {
    width: 30,
    height: 30,
    backgroundColor: "green",
    borderRadius: 30,
    elevation: 5,
    position: "relative",
  },
  line: {
    width: 100,
    height: 5,
    backgroundColor: "green",
    borderRadius: 30,
    marginTop: 12,
    elevation: 5,
    position: "relative",
    marginLeft: 10,
    marginRight: 10,
  },
  circleToDo: {
    width: 30,
    height: 30,
    backgroundColor: "#f1f1f1",
    borderWidth: 3,
    borderColor: "green",
    borderRadius: 30,
    elevation: 5,
    position: "relative",
  },
  inputView: {
    height: 37,
    width: 270,
    paddingLeft: 30,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    elevation: 5,
    position: "relative",
  },
  inputText: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 0,
  },
  iconTextInput: {
    padding: 10,
  },
  redirect_signIn_text: {
    color: "green",
    fontWeight: "bold",
  },
  checkbox: {
    alignSelf: "center",
  },
  checkBoxText: {
    textAlign: "right",
  },
  step_button: {
    width: 170,
    backgroundColor: "#588B43",
    borderRadius: 15,
    height: 50,
    marginTop: 40,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  stepText: {
    color: "white",
    fontSize: 20,
  },
  info_container: {
    alignItems: "center",
    marginTop: 15,
  },
});

export default SignIn;
