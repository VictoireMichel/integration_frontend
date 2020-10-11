import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import PlantsList from "./PlantsDatas";

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
        if(PlantsList.findIndex(item => item.id === this.state.idPlant ) !== -1){
            const tempRealId = PlantsList[this.state.idPlant - 1] //Variable temporaire le temps que je sache comment correctement récuper l'id par index
            //console.log(tempRealId)
            return (
                <View style={styles.main_container}>
                    <Text style={styles.nomPlante}>{tempRealId.nom} </Text>
                    <Image
                        style={styles.image}
                        source={require('../assets/Images/persil.png')}

                    />

                    <Text style={styles.description_title}>Croissance(jours)</Text>
                    <Text style={styles.description_text}>{tempRealId.croissance}</Text>
                    <Text style={styles.description_title}>Description</Text>
                    <Text style={styles.description_text}>{tempRealId.description}</Text>
                    <Text style={styles.description_title}>Sol</Text>
                    <Text style={styles.description_text}>{tempRealId.sol}</Text>
                    <Text style={styles.description_title}>Luminosité demandée</Text>
                    <Text style={styles.description_text}>{tempRealId.luminosité}</Text>
                    <Text style={styles.description_title}>Entretien</Text>
                    <Text style={styles.description_text}>{tempRealId.entretien}</Text>
                </View>
            )
        }
    }




    render() {
        const idPlant = this.props.navigation.state.params.idPlant
        //console.log(this.state.idPlant)
        return (
            <ScrollView>
                <View style={styles.main_container}>
                    {this._displayPlant()}
                </View>
            </ScrollView>
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
    },
    image:{
        flex: 1,
        height: 150,
        width: 200,
        resizeMode: 'cover'
    },
    description_text: {
        color: '#666666',
        margin: 5,
        marginBottom: 15,
        textAlign: "center",
        fontSize: 15
    },
    nomPlante: {
        fontSize: 30
    },
    description_title: {
        fontSize: 20
    }
})

export default PlantDetail