import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class PlantDetail extends React.Component {
    render() {
        const idPlant = this.props.navigation.state.params.idPlant
        console.log(this.props.navigation.state.params.idPlant)
        return (
            <View>
                <Text>Voici la plant n° {idPlant}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default PlantDetail