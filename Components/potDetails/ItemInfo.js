import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Box from "./Box";
import ProgressBar from "./ProgressBar";

class ItemInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Box color={this.props.color} icon={this.props.icon} />
        <View style={styles.boxInfo}>
          <Text style={styles.textInfo}>{this.props.itemTitle}</Text>
          <ProgressBar
            color={this.props.color}
            itemTitle={this.props.itemTitle}
            dataProgress={this.props.dataProgress}
          />
          <Text style={{alignSelf: "center", flex: 0}}>
            {this.props.dataWanted}
          </Text>
        </View>
      </View>
    );
  }
}

export default ItemInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  text: {
    color: "black",
  },
  boxIcon: {
    flex: 1,
    flexDirection: "column",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: "15%",
    paddingBottom: "15%",
  },
  boxInfo: {
    flex: 2,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInfo: {
    flex: 1,
    textAlignVertical: "center",
    marginLeft: "10%",
    fontSize: 20,
  },
});
