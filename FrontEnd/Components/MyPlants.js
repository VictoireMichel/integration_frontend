import React from 'react'
import { StyleSheet, View, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import PlantItem from "./PlantItem";
import { getPlantsFromApi } from '../GetDataFromApi/GetDataFromApi'

class PlantsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            plantsListApi: []
        }
    }

    /**
     * C'est dans cette fonction que ce fait l'appel à l'API
     */
    componentDidMount() {
        this.setState({ isLoading: true }) // Lancemenent du chargement
        getPlantsFromApi().then(data => {
            this.setState({
                plantsListApi: data,
                isLoading: false // Arrêt du chargement
            })
        })
    }

    /**
     * Cette fonction permet de naviguer dans le détail de chaque plante
     * lorsque l'on click desus
     */
    _displayDetailForPlant = (idPlant) => {
        console.log("Display plant " + idPlant)
        this.props.navigation.navigate('Details')
    }

    /**
     * Cette fonction parcours la liste de film précédement remplie en appelant
     * le componsant "PlantItem"
     */
    _loadListItems= () => {
        if (this.state.plantsListApi.length > 0){
            return this.state.plantsListApi.map(item => {
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
        console.log(this.props.navigation.navigate)
        return (
            <View>
                <TextInput placeholder="Rechercher..." style={styles.Search}/>

                {this.state.isLoading ?
                    (<View style={styles.loading_container}>
                        <ActivityIndicator size='large' color="#0000ff" />
                    </View>) :
                    (<ScrollView style={styles.scrollView_container}>
                        {this._loadListItems()}
                    </ScrollView>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Search: {
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
        marginBottom: 75,
        paddingRight: 10,
        paddingLeft: 10
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default PlantsList