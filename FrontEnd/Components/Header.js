import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button, Image} from "react-native-web";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


class Header extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_icon}>
                    <FontAwesomeIcon style={styles.favorite_image} icon={ faCog } />
                </View>
                <View style={styles.container_title}>
                    <Text style={styles.title_text}>eGrow</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#588B43", //#009387
        flexDirection: 'row',
        paddingTop: 25,
        height: 75,
        elevation: 5,
        position:'relative',
    },
    container_title: {
        flex: 1,
        alignItems:'center',
    },
    container_icon: {
        paddingLeft: 10,
    },
    title_text: {
        //fontFamily: "allerta-stencil-regular",
        color: "#FFFFFF",
        height: 45,
        width: 175,
        fontSize: 28,
        textAlign: "center",
        letterSpacing: 1.15,
        right: '3%',

    },
    favorite_image: {
        color:'white',
        marginTop:'80%',
        left:'10%'
    }
})

export default Header