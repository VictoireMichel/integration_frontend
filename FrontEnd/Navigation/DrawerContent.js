import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQuestionCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import ToggleSwitch from "toggle-switch-react-native";

export default function DrawerContent (props) {
  return (
    <View style={styles.slide} forceInset={{ top: "always" }}>
      <View style={styles.header}>
        <FontAwesomeIcon style={styles.user_icon} icon={faUser} size={80}/>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text} onPress={() => {
          props.navigation.navigate("Acceuil");
        }}>
                    Acceuil
        </Text>
        <Text style={styles.text} onPress={() => {
          props.navigation.navigate("Connexion");
        }}>
                    Se connecter
        </Text>
        <Text style={styles.text} onPress={() => {
          props.navigation.navigate("Enregistrement");
        }}>
                    S'inscrire
        </Text>
      </View>
      <View style={styles.end}>
        <View style={styles.switch}>
          <ToggleSwitch
            isOn={true}
            onColor="#588B43"
            offColor="grey"
            label="Mode Sombre"
            labelStyle={{ color: "black", fontWeight: "900", fontSize: 16 }}
            size="medium"
            onToggle={isOn => console.log("changed to : ", isOn)}
          />
        </View>
        <View style={styles.help_container}>
          <Text style={styles.help_text}>

            <FontAwesomeIcon style={styles.help_icon} icon={faQuestionCircle} size={16}/>
            <View style={{ width: 5 }}>

            </View>
                        Aide
          </Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F0F0F0"
  },
  header: {
    backgroundColor: "#588B43",
    width: 280,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  text_container: {
    marginTop: 20
  },
  text: {
    backgroundColor: "#284F35",
    color: "#FFFFFF",
    borderWidth: 0,
    borderRadius: 5,
    borderColor: "#FFFFFF",
    margin: 10,
    padding: 10,
    alignItems: "center",
    textAlign: "center"
  },
  user_icon: {
    color: "#fff"
  },
  end: {
    flex: 1,
    justifyContent: "flex-end"
  },
  switch: {
    flex: 0,
    alignItems: "center",
    marginBottom: 20
  },
  help_container: {
    flex: 0,
    alignItems: "center",
    marginBottom: 20
  },
  help_text: {
    fontSize: 16

  },
  help_icon: {

  }
});
