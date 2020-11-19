import React from "react";
import {Text, View, StyleSheet, Button, Image, ScrollView} from "react-native";
import ItemInfo from "./ItemInfo";

class MyPlantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };

  componentDidMount() {

  }

  render() {
    return(
        <View style = {styles.container}>
          <View style = {styles.titleContainer}>
            <View style = {styles.imageContainer}>
              <Image style = {styles.image} source= {require('./feuille-texture-blanche-1.jpg')} />
            </View>
            <Text style = {styles.title}>
              Ma plante
            </Text>
          </View>
          <View style = {styles.line } />
          <View style = {styles.itemContainer}>
            <ScrollView>
                <ItemInfo color = "green"/>
                <ItemInfo color = "blue"/>
                <ItemInfo color = "red"/>
                <ItemInfo color = "teal"/>
                <ItemInfo color = "black"/>
                <ItemInfo color = "green"/>
                <ItemInfo color = "green"/>
                <ItemInfo color = "green"/>
                <ItemInfo color = "green"/>
                <ItemInfo color = "green"/>
            </ScrollView>
          </View>

        </View>
    )
  }
}

export default MyPlantInfo;

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
    paddingTop: '2%'
  },
  title: {
    flex: 2,
    color: 'gray',
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 35,
    marginLeft: '3%'
  },
  titleContainer: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "gainsboro",
    flexDirection: 'row',
    marginLeft: '5%'

  },
  image:{
    flex:1,
    borderRadius: 2000,
    width: '89%',
    height: '100%'
  },
  imageContainer: {
    flex:1,
    marginTop: '3%',
    marginBottom: '3%'
  },
  itemContainer: {
    flex: 4,
    width: '100%',
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    alignContent: 'center'
  },
  line: {
    flex: 0,
    height: '0.5%',
    width: '65%',
    backgroundColor: 'silver',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: '3%',
  }

};
