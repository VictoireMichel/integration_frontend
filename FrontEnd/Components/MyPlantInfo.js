import React from "react";
import { Text, View, StyleSheet } from "react-native";

class MyPlantInfo extends React.Component {
  render () {
      const { itemId, otherParam} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.text_container}>
                    Bonjour
        </Text>

          <Text>{/* test qui permet de passer des paramètres d'un Component parent à l'enfant*/}
              itemId: {JSON.stringify(itemId)}
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
