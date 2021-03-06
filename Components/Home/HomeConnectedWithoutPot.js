import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSun, faTint } from "@fortawesome/free-solid-svg-icons";
import ProgressCircle from "react-native-progress-circle";

class HomeConnectedWithoutPot extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <View>
            <Svg style={styles.ball1}>
              <Ellipse
                fill="rgba(230, 230, 230,1)"
                cx={65}
                cy={65}
                rx={65}
                ry={65}
              />
            </Svg>
            <Text style={styles.title}>Aucune plante</Text>
            <View style={styles.line} />
            <Image resizeMode="cover" style={styles.parsley} />
          </View>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <ProgressCircle
                style={styles.ball}
                percent={0}
                radius={31}
                borderWidth={4}
                color="#70BDD9"
                shadowColor="#E6E6E6"
                bgColor="#FFFFFF">
                <FontAwesomeIcon style={styles.water} icon={faTint} size={25} />
              </ProgressCircle>
            </View>
            <View style={styles.container3}>
              <ProgressCircle
                style={styles.ball}
                percent={0}
                radius={31}
                borderWidth={4}
                color="#A2A2A2"
                shadowColor="#E6E6E6"
                bgColor="#FFFFFF">
                <Text style={styles.age}>{"0 jour"}</Text>
              </ProgressCircle>
            </View>
            <View style={styles.container3}>
              <ProgressCircle
                style={styles.ball}
                percent={0}
                radius={31}
                borderWidth={4}
                color="#E1BC31"
                shadowColor="#E6E6E6"
                bgColor="#FFFFFF">
                <FontAwesomeIcon style={styles.sun} icon={faSun} size={25} />
              </ProgressCircle>
            </View>
          </View>
        </View>
        <TouchableOpacity
          testID={"List"}
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("List");
          }}>
          <View style={styles.text_container}>
            <Text style={styles.text}>Ajouter une plante</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  container: {
    marginTop: "10%",
    flex: 0,
    backgroundColor: "#284F35",
    height: 350,
    width: 300,
    borderRadius: 20,
    shadowColor: "#1E3927",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // android
    elevation: 8,
    position: "relative",
  },
  container2: {
    marginTop: "auto",
    backgroundColor: "#284F35",
    height: 100,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  container3: {
    marginTop: "auto",
    backgroundColor: "#284F35",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  ball: {
    left: 20,
    top: 16,
    marginTop: "7%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
  ball1: {
    marginTop: "7%",
    marginLeft: "28%",
    justifyContent: "center",
  },
  parsley: {
    width: "75%",
    height: "50%",
    marginLeft: "10.5%",
    marginRight: "auto",
    marginTop: "-75.5%",
  },
  title: {
    fontSize: 33,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-35%",
    color: "#FFFFFF",
  },
  line: {
    backgroundColor: "#E6E6E6",
    width: 125,
    height: 2,
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: "#284F35",
    marginTop: "10%",
    marginBottom: "10%",
    justifyContent: "center",
    borderRadius: 16,
    shadowColor: "#1E3927",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // android
    elevation: 8,
    position: "relative",
  },
  text_container: {
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
  },
  water: {
    marginTop: "-15%",
    top: 5,
    color: "#70BDD9",
  },
  sun: {
    marginTop: "-15%",
    top: 5,
    color: "#E1BC31",
  },
  age: {
    fontSize: 13.5,
    textAlign: "center",
  },
});

export default HomeConnectedWithoutPot;
