import React from "react";
import { SearchBar } from 'react-native-elements';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import {getInformationPlantsFromApi, getPlantsFromApi} from "../../GetDataFromApi/GetDataFromApi";

class PlantsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      plantsListApi: [],
      search: '',
    };
  }

  /**
   * C'est dans cette fonction que ce fait l'appel à l'API
   */
  componentDidMount() {
    this.setState({ isLoading: true }); // Lancemenent du chargement
    getPlantsFromApi().then((data) => {
      this.setState({
        plantsListApi: data,
        isLoading: false, // Arrêt du chargement
      });
    });
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  _loadSearch(){
    if(this.state.search.length > 0){
      getInformationPlantsFromApi(this.state.search).then((data) => {
        this.setState({
          plantsListApi: data,
        })
      })
    }
  }

  _displaySearchBar(){
    const { search } = this.state;
    return (
        <SearchBar
            placeholder="Rechercher une plante..."
            onChangeText={this.updateSearch}
            value={search}
            onSubmitEditing={() => {this._loadSearch()}}
            containerStyle={[styles.search_bar, {backgroundColor: "white"}]}
            inputContainerStyle={[{backgroundColor: "white"}]}
        />
    )
  }

  /**
   * Cette fonction parcours la liste de plantes précédement remplie en appelant
   * le componsant "PlantItem"
   */
  _loadListItems = () => {
    if (this.state.plantsListApi.length > 0) {
      return this.state.plantsListApi.map((item) => {
        return (
          <TouchableOpacity
            style={styles.listItem_container}
            onPress={() => {
              this.props.navigation.navigate("Details", { itemId: item.id });
            }}
            key={item.id}>
            <View style={styles.image_container}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://pi2-ephec.herokuapp.com/files/" + item.picturePath,
                }}
              />
            </View>
            <View style={styles.text_container}>
              <Text style={styles.listItem_text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      });
    }
  };

  render() {
    return (
      <View>
        <View style={styles.search_container}>
          {this._displaySearchBar()}
        </View>
        {this.state.isLoading ? (
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
            <ScrollView style={styles.scrollView_container}>
              {this._loadListItems()}
            </ScrollView>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Search: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    color: "#121212",
    height: 37,
    width: 307,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    paddingTop: 6,

    backgroundColor: "#F8F8F8",
    elevation: 5,
    position: "relative",
  },
  scrollView_container: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 75,
    paddingRight: 10,
    paddingLeft: 10,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  //******************************************** Touchable opacity ************************************//
  listItem_container: {
    width: 280,
    height: 90,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#F8F8F8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // its for android
    elevation: 5,
    position: "relative",
    borderRadius: 10,

    flexDirection: "row",
  },
  image_container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 80,
    margin: 5,
  },
  text_container: {
    flex: 1,
    justifyContent: "center",
  },
  listItem_text: {
    color: "#121212",
    fontSize: 18,
  },
  search_bar:{
    margin: 10,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    borderRadius: 10,
  },
  search_container:{
    paddingTop: 5,
  }
});

export default PlantsList;
