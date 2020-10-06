import React from 'react'
import {StyleSheet, Text, View, ImageBackground, Button, Image} from 'react-native'
import Svg, { Ellipse } from "react-native-svg";







class Home extends React.Component {


        render()
        {
            console.log(this.props.navigation)
            return (
                <View style={styles.background}>
                    <View style={styles.container}>
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
        height: 400,
        width: 300,
        borderRadius:20,

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



})

export default Home