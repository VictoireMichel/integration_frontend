import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button, Image} from "react-native-web";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container_title}>
                    <Text style={styles.title_text}>E - Grow</Text>

                </View>
                <View style={styles.container_icon}>
                   <FontAwesomeIcon style={styles.favorite_image} icon={ faCog } />
                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(39,185,120,1)",
        height: 80,
        flexDirection: 'row',
        paddingTop: 30
    },
    container_title: {
        flex: 1,
        alignItems:'center',
    },
    container_icon: {
        alignItems:'flex-end',
        paddingRight: 10
    },
    title_text: {
       // fontFamily: "allerta-stencil-regular",
        color: "#121212",
        height: 45,
        width: 175,
        fontSize: 28,
        textAlign: "center",
        letterSpacing: 1.15,

    },
    favorite_image: {
        color:'white',
        marginRight: 5,
        marginTop: 10,
    }
})

export default Header