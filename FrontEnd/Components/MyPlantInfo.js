import React from "react";
import { Text, View, StyleSheet } from "react-native";

class MyPlantInfo extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text_container}>
                    Bonjour
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  text_container: {
    fontSize: 50
  }
});
export default MyPlantInfo;
