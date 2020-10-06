import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class PlantDetail extends React.Component {
    render() {
        const idPlant = this.props.navigation.state.params.idPlant
        console.log(this.props.navigation.state.params.idPlant)
        return (
            <View style={styles.main_container}>
                <Text style={styles.text}>Voici la plant n° {idPlant}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25
    }
})

export default PlantDetail