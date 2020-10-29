import React from "react";
import { Text, View, StyleSheet } from "react-native";

class MyPlantInfo extends React.Component {
  render () {
      const { itemId, otherParam} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.text_container}>
                    Détails sur ma plante
        </Text>

          <Text>{/* test qui permet de passer des paramètres d'un Component parent à l'enfant*/}
              itemId: {JSON.stringify(itemId)}
          </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_container: {
        fontSize: 30
    }
});
export default MyPlantInfo;
