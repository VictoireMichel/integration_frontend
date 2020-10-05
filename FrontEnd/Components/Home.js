import React from 'react'
import {StyleSheet, Text, View, ImageBackground, Button, Image} from 'react-native'



class Home extends React.Component {

        render()
        {
            console.log(this.props.navigation)
            return (
                <View style={styles.container}>
                    <ImageBackground source={require("../assets/Images/herbe3.png")} resizeMode="stretch"
                                     style={styles.grass}/>



                    <View style={styles.square}>



                        <Text style={styles.info}>Persil</Text>
                        <Text style={styles.info}>Humidité : 40%</Text>
                        <Text style={styles.info}>Age : 15 jours</Text>
                    </View>

                    <View style={styles.button}>
                        <Button
                            color="#907878"
                            title="Voir détails..."
                            onPress={() => this.props.navigation.navigate("MyPlantInfo") + console.log("click test")}
                        />
                    </View>

                    <Image style={styles.image2} source={require("../assets/Images/persil.png")}/>




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
    grass: {
        top: 130,
        left: -140,
        width: 663,
        height: 800,
        position: "absolute",
        opacity: 0.85,
    },
    photo: {
        backgroundColor: "rgba(116,98,98,1)",
        opacity: 0.71,
        borderRadius: 34,
        width: 297,
        height: 203
    },
    button: {
        position: "absolute",
        top: 300,
        left: 130,
        height: 44,
        width: 145,
        borderRadius: 19,
    },
    square: {
        top: 48,
        left: 30,
        width: 350,
        height: 230,
        position: "absolute",
        backgroundColor: "rgba(116,98,98,0.9)",
        borderRadius: 19
    },
    info:{
        color: "rgba(255,255,255,255)",
        fontSize: 20,
        marginTop: 35,
        marginLeft: 185
    },
    image:{
        top: 0,
        left: 139,
        width: 227,
        height: 306,
        position: "absolute"
    },
    image2:{
        top: -135,
        left: -90,
        width: 200,
        height: 306
    }


})

export default Home