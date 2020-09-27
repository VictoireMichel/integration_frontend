import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

class MyPlants extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text_menu}>Voici mes plantes</Text>
                <Text style={styles.text_infos}>(Listes mes plantes qui poussent)</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rect: {
        flex: 1
    },
    rect_imageStyle: {},
    text_menu: {
        fontSize: 25
    },
    text_infos:{
        fontSize: 15
    }
})

export default MyPlants