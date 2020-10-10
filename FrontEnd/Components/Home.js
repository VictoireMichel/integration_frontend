import React from 'react'
import {StyleSheet, Text, View, ImageBackground, Button, Image, TouchableOpacity} from 'react-native'
import Svg, { Ellipse } from "react-native-svg";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faSun, faTint} from "@fortawesome/free-solid-svg-icons";








class Home extends React.Component {


        render()
        {
            console.log(this.props.navigation)
            return (
                <View style={styles.background}>
                    <View style={styles.container}>

                        <View>
                            <Svg style={styles.ball1}>
                                <Ellipse
                                    fill="rgba(230, 230, 230,1)"
                                    cx={65}
                                    cy={65}
                                    rx={65}
                                    ry={65}
                                />

                            </Svg>
                            <Text style={styles.title}>Persil</Text>
                            <View style={styles.line}/>
                            <Image resizeMode='cover' style={styles.parsley} source={require('../assets/Images/persil.png')}/>

                        </View>



                        <View style={styles.container2}>

                            <View style={styles.container3}>
                                <Svg style={styles.ball}>
                                    <Ellipse
                                        fill="rgba(230, 230, 230,1)"
                                        cx={30}
                                        cy={30}
                                        rx={30}
                                        ry={30}
                                    />

                                </Svg>
                                <FontAwesomeIcon style={styles.icon} icon={faTint}/>
                            </View>
                            <View style={styles.container3}>
                                <Svg style={styles.ball}>
                                    <Ellipse
                                        fill="rgba(230, 230, 230,1)"
                                        cx={30}
                                        cy={30}
                                        rx={30}
                                        ry={30}
                                    />
                                </Svg>
                                <Text style={styles.age}>15 jours</Text>
                            </View>
                            <View style={styles.container3}>
                                <Svg style={styles.ball}>
                                    <Ellipse
                                        fill="rgba(230, 230, 230,1)"
                                        cx={30}
                                        cy={30}
                                        rx={30}
                                        ry={30}
                                    />
                                </Svg>
                                <FontAwesomeIcon style={styles.icon} icon={faSun}/>
                            </View>

                        </View>

                    </View>

                    <TouchableOpacity style={styles.button} onPress={()=> {this.props.navigation.navigate('MyPlantInfo') ; console.log('nav test')}}>
                       <View style={styles.text_container}>
                           <Text style={styles.text}>Plus d'infos</Text>
                       </View>
                    </TouchableOpacity>

                </View>
            )
        }
    }


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    container:{
        marginTop:'10%',
        flex:0,
        backgroundColor: '#284F35',
        height: 350,
        width: 300,
        borderRadius:20,
        shadowColor: '#1E3927',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        //android
        elevation: 8,
        position:'relative',



    },
    container2:{
        marginTop:'auto',
        backgroundColor: '#284F35',
        height: 100,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,


    },
    container3:{
        marginTop:'auto',
        backgroundColor: '#284F35',
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,

    },
    ball:{
        left: 20,
        top:16,
        marginTop:'7%',
        marginLeft:'auto',
        marginRight:'auto',
        justifyContent:'center',
    },
    ball1:{
        marginTop:'7%',
        marginLeft:'28%',
        justifyContent:'center',
    },
    parsley:{
        width:'75%',
        height:'50%',
        marginLeft:'10.5%',
        marginRight: 'auto',
        marginTop:'-75.5%',
    },
    title:{
        fontSize:38,
        marginLeft:'auto',
        marginRight: 'auto',
        marginTop:'-35%',
        color:"#FFFFFF"
    },
    line:{
        backgroundColor:'#E6E6E6',
        width:125,
        height:2,
        borderRadius:100,
        marginLeft:'auto',
        marginRight: 'auto',
    },
    button:{
        width:130,
        height:35,
        backgroundColor:'#284F35',
        marginTop:'10%',
        marginBottom:'10%',
        justifyContent: 'center',
        borderRadius:16,
        shadowColor: '#1E3927',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        //android
        elevation: 8,
        position:'relative',
    },
    text_container:{
        justifyContent: 'center'
    },
    text:{
        color:'#FFFFFF',
        fontSize: 15,
        textAlign:'center',
    },
    icon:{
        marginTop:'-15%',
        top:-45,
    },
    age:{
        color:"#000000",
        fontSize:10,
        marginTop:'-15%',
        top:-45,
    }

})

export default Home