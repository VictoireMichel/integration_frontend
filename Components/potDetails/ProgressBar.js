import * as Progress from "react-native-progress";
import {Text, View} from "react-native";
import React from "react";

class ProgressBar extends React.Component {
  render() {
    return (
      <View style={styles.progressInfo}>
        <Progress.Bar
          color={this.props.color}
          progress={
            this.props.itemTitle === "Température"
              ? (this.props.dataProgress * 100) / 3500
              : this.props.dataProgress / 100
          }
          animated={false}
          height={20}
          width={170}
        />
        <Text style={styles.pourcent}>
          {this.props.dataProgress}
          {this.props.itemTitle === "Température" ? "°C" : "%"}
        </Text>
      </View>
    );
  }
}

export default ProgressBar;

const styles = {
  progressInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pourcent: {
    alignSelf: "center",
  },
};
