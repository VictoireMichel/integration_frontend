import React from 'react'
import {StyleSheet, Text, View, ImageBackground, Button, Image, TouchableOpacity} from 'react-native'
import Svg, { Ellipse } from "react-native-svg";








class Home extends React.Component {


        render()
        {
            console.log(this.props.navigation)
            return (
                <View style={styles.background}>
                    <View style={styles.container}>
                        <View style />
                        <Image resizeMode='cover' style={styles.parsley} source={require('../assets/Images/persil.png')}/>
                        <Text style={styles.title}>Persil</Text>
                        <View style={styles.line}/>

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
                            </View>

                        </View>

                    </View>

                    <TouchableOpacity style={styles.button} onPress={()=> {this.props.navigation.navigate('MyPlantInfo') ; console.log('nav test')}}>
                       <View style={styles.text_container}>
                           <Text style={styles.text}>Plus d'infos...</Text>
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
        backgroundColor: '#FFFFFF',
        height: 350,
        width: 300,
        borderRadius:20,
        //opacity:0.5,

    },
    container2:{
        marginTop:'auto',
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,

    },
    container3:{
        marginTop:'auto',
        backgroundColor: '#FFFFFF',
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
    },
    parsley:{

        width:'100%',
        height:'50%',
        marginLeft:'auto',
        marginRight: 'auto',
        marginTop:'5%',

    },
    title:{
        fontSize:30,
        marginLeft:'auto',
        marginRight: 'auto',
        color:"#7C7C7C"
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
        backgroundColor:'#FFFFFF',
        marginTop:'10%',
        marginBottom:'10%',
        justifyContent: 'center',
        borderRadius:16,
    },
    text_container:{
        justifyContent: 'center'
    },
    text:{
        color:'#7C7C7C',
        fontSize: 15,
        textAlign:'center',

    }

})

export default Home