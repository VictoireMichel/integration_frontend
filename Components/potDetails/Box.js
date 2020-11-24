import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
  faTint,
  faSun,
  faThermometerThreeQuarters,
  faTrash,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import ProgressCircle from "react-native-progress-circle";

class Box extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: this.props.color,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          paddingTop: "10%",
          paddingBottom: "10%",
        }}>
        <FontAwesomeIcon
          size={40}
          style={styles.icons}
          icon={
            this.props.icon === "faSun"
              ? faSun
              : this.props.icon === "faTint"
              ? faTint
              : this.props.icon === "faThermometerThreeQuarters"
              ? faThermometerThreeQuarters
              : faQuestion
          }
        />
      </View>
    );
  }
}

export default Box;

const styles = {
  icons: {
    color: "white",
    alignSelf: "center",
    height: "100%",
  },
};
