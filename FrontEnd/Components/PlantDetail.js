import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PlantsLists from "./PlantsDatas";

class PlantDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idPlant : null
        }
    }

    componentDidMount() {

        if(this.props.navigation.state.params.idPlant){
            this.setState({
                idPlant : this.props.navigation.state.params.idPlant
            })
        }
    }

    _displayPlant(){
        if(PlantsLists.findIndex(item => item.id === this.state.idPlant ) !== -1){

        }}




    render() {
        const idPlant = this.props.navigation.state.params.idPlant
        console.log(this.state.idPlant)
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