import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

class HomeNotConnected extends React.Component {
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
            <Text style={styles.title}>Veuillez vous connecter</Text>
            <View style={styles.line} />
            <Image resizeMode="cover" style={styles.parsley} />
          </View>
        </View>
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
    fontSize: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-35%",
    color: "#FFFFFF",
    textAlign: "center",
  },
  line: {
    backgroundColor: "#E6E6E6",
    width: 125,
    height: 2,
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
});


export default HomeNotConnected;
