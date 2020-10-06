import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import PlantItem from "./PlantItem";

class PlantsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plantsList:[
                {
                    id: 1,
                    nom: 'Persil',
                    croissance: '25',
                    saison: '1',
                    description: "C'est une plante verte hé oui"
                },
                {
                    id: 2,
                    nom: 'Origan',
                    croissance: '25',
                    saison: '1',
                    description: "C'est une plante verte hé oui"
                },
                {
                    id: 3,
                    nom: 'Thym',
                    croissance: '25',
                    saison: '1',
                    description: "C'est une plante verte hé oui"
                },
                {
                    id: 4,
                    nom: 'Ail',
                    croissance: '25',
                    saison: '1',
                    description: "C'est une plante verte hé oui"
                },
                {
                    id: 5,
                    nom: 'Oignon',
                    croissance: '25',
                    saison: '1',
                    description: "C'est une plante verte hé oui"
                },
                {
                    id: 6,
                    nom: 'Ciboulette',
                    croissance: '25',
                    saison: '1',
                    description: "C'est une plante verte hé oui"
                },
                {
                    id: 7,
                    nom: 'Echalotte',
                    croissance: '25',
                    saison: '1',
                    description: "C'est une plante verte hé oui"
                },
                {
                    id: 8,
                    nom: 'Cerfeuil',
                    croissance: '25',
                    saison: '1',
                    description: "C'est une plante verte hé oui"
                },
                {
                    id: 9,
                    nom: 'Fenouil',
                    croissance: '25',
                    saison: '1',
                }
            ]
        }
    }



    _displayDetailForPlant = (idPlant) => {
        console.log("Display plant " + idPlant)
        this.props.navigation.navigate('PlantDetail', {idPlant: idPlant})
    }

    _loadListItems= () => {
        if (this.state.plantsList.length > 0){
            return this.state.plantsList.map(item => {
                return(
                    <PlantItem
                        key={item.id}
                        plant={item}
                        displayDetailForPlant={this._displayDetailForPlant}
                    />
                )
            })
        }
    }

    render() {
        return (
            <View>

                    <TextInput
                        placeholder="Rechercher..."
                        style={styles.rechercher}
                    ></TextInput>

                <ScrollView style={styles.scrollView_container}>
                    {this._loadListItems()}
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    rechercher: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        color: "#121212",
        height: 37,
        width: 307,
        borderRadius: 8,
        textAlign: "center",
        fontSize: 18,

        backgroundColor:'#F8F8F8',
        elevation: 5,
        position:'relative'
    },
    scrollView_container: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 50,
        paddingRight: 10,
        paddingLeft: 10
    }
})

export default PlantsList