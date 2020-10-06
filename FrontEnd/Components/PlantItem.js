import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'

class PlantItem extends React.Component {
    render() {
        const { plant, displayDetailForPlant } = this.props // ici la variable plant contient un tableau de toutes les plantes
        return (
            <TouchableOpacity
                style={styles.listItem_container}
                onPress={() => displayDetailForPlant(plant.id)}
            >
                <Text style={styles.listItem_text}>{plant.nom}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listItem_container: {
        width: 280,
        height: 90,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor:'#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignItems:'center',
        // its for android
        elevation: 5,
        position:'relative',
        borderRadius:10
    },
    listItem_text: {
        color: "#121212",
    }
})

export default PlantItem