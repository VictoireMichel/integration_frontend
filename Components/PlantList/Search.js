//import {getPlantsFromApi} from './FilterApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state {
            plants: [],
            searchedText: "" //initialisation de la donnée searchedtext dans le state
        }
    }

    _searchedTextInputChanged(text) {
        this.setState({ searchedText: text })
    }

    _loadPlants() {
        console.log(this.state.searchedText) //log pour vérifier que l'on recoit le textInput
        if (this.state.searchedText.length > 0) {
            getPlantsFromApi(this.state.searchedText).then(data => {
                this.setstate({plants: data.results})
            })
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Rechercher....'
                    onChangeText={(text) => this._searchedTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <FlatList
                    data={Plants}
                    renderItem={({item}) => <PlantItem plant={item}/>}
                />
            </View>
        )
    }


    <FlatList
        data={this.state.plants}
        renderItem={({item}) => <PlantItem plant={item}/>}
    />
}