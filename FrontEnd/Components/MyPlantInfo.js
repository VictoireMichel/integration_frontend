import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {delPotsByIDFromApi} from "../GetDataFromApi/GetDataFromApi";

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
          <Text style={styles.text} onPress={()=>{delPotsByIDFromApi(13).then(res => console.log(" supprimé "));}}>
              Supprimer Pot
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
});
export default MyPlantInfo;
