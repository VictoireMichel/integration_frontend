import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Accueil extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text_menu}>Bienvenue sur E-Grow !</Text>
                <Text style={styles.text_infos}>(Listes avec toutes les plantes)</Text>

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
        fontSize: 25
    },
    text_infos:{
        fontSize: 15
    }
})

export default Accueil