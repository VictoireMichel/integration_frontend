import React from 'react'
import {StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity} from 'react-native'
//import {NavigationContainer} from "@react-navigation/native";
//import {createStackNavigator} from "react-navigation-stack";


class Accueil extends React.Component {


        _displayDetailForMyPlant = () => {
            this.props.navigation.navigate('MyPlantInfo')
        }

        onClick = () => console.log("test");

        render()
        {
            console.log(this.props.navigation)
            return (
                <View style={styles.container}>
                    <ImageBackground source={require("../assets/Images/herbe.png")} resizeMode="contain"
                                     style={styles.herbe}/>

                    <Button
                        color="#D0D0DC"
                        title="Press me"
                        onPress={() => this.props.navigation.navigate("MyPlantInfo") + console.log("hola")} // pour le moment route vers le mauvais component
                    />

                    <TouchableOpacity
                        onPress={() => this._displayDetailForMyPlant}
                    >
                        <View style={styles.test_container}>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_menu: {
        fontSize: 25,
    },
    text_infos:{
        fontSize: 15
    },
    herbe: {
        top: 50,
        left: -660,
        width: 1144,
        height: 957,
        position: "absolute"
    },
    touchOpacity:{
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: "grey"
    },
    button1:{
        width: 325,
        height: 164,
        color: "#B7B7E5",
        borderRadius: 15,
    },
    test_container: {
        width:50,
        height: 50,
        backgroundColor: 'black'
    }

})

export default Accueil