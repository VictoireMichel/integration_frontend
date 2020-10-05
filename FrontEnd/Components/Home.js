import React from 'react'
import {StyleSheet, Text, View, ImageBackground, Button, Image} from 'react-native'
import Svg, { Ellipse } from "react-native-svg";






class Home extends React.Component {


        render()
        {
            console.log(this.props.navigation)
            return (
                <View style={styles.container}>




                    <View style={styles.square}>

                        <Image style={styles.image2} source={require("../assets/Images/persil.png")}/>

                        <Text style={styles.parsley}>Persil</Text>

                        <View style={styles.line}/>


                        <Text style={styles.info}>Age : 15 jours</Text>

                        <Svg viewBox="0 0 48.27 47.93" style={styles.ball}>

                            <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={6}
                        cy={6}
                        rx={6}
                        ry={6}
                            />
                        </Svg>


                    </View>

                    <View style={styles.button}>
                        <Button
                            color="#2E6542"
                            title="Voir détails..."
                            onPress={() => this.props.navigation.navigate("MyPlantInfo") + console.log("click test")}
                        />
                    </View>






                </View>
            )
        }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FCF9',
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
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        top: 500,
        height: 44,
        width: 145,
        borderRadius: 19,
    },
    square: {
        top: -65,
        zIndex:-1,
        backgroundColor:'#2E6542',
        opacity:1,
        justifyContent:'center',
        alignItems:'center',
        width: 350,
        height: 450,
        paddingTop:15,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,

        // its for android
        elevation: 7,
        position:'relative',
        borderRadius:20
    },
    info:{
        color: "#E6E6E6",
        fontSize: 20,
        marginTop: 20,
        marginLeft: 185,
        top: 90,
        left:-87,
        justifyContent:'center',
    },
    parsley:{
        color: "#E6E6E6",
        marginTop: 20,
        marginLeft: 185,
        top: 90,
        left:-87,
        justifyContent:'center',
        fontSize: 30,
    },
    image:{
        top: 0,
        left: 139,
        width: 227,
        height: 306,
        position: "absolute"
    },
    image2:{
        zIndex:2,
        justifyContent:'center',
        top: 150,
        width: 200,
        height: 306
    },
    line:{
        backgroundColor:'#E6E6E6',
        width:125,
        height:2,
        top:90,
        left:7,
        borderRadius:100,

    },
    ball:{
        justifyContent:'center',
        left: 30,
        top:70,
    }


})

export default Home