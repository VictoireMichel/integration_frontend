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
        backgroundColor: '#6A9113',
        height:70,
        flexDirection: 'row',
        paddingTop: 30
    },
    container_title: {
        flex: 1,
        alignItems:'center',

    },
    conatainer_icon: {
      flex: 1,
        justifyContent:'flex-end'
    },
    title_text: {
        fontSize: 25,
        color: 'white',
    },
    favorite_image: {
        color:'white',
        marginRight: 5,
        marginTop: 10,
    }
})

export default Header