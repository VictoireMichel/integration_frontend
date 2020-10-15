import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSeedling, faBell, faListUl, faUser, faUserLock} from '@fortawesome/free-solid-svg-icons'

import PlantsList from "../Components/MyPlants";
import PlantDetail from "../Components/PlantDetail";
import Home from "../Components/Home";

//import MyPlants from "../Components/MyPlants";

import Notifications from "../Components/Notifications";
import MyPlantInfo from "../Components/MyPlantInfo";
import SignUp from "../Account/SignUp";
import SignIn from "../Account/SignIn";


//-------------------------------------------- Route Acceuil ----------------------------------
const AcceuilStackNavigator = createStackNavigator({
    Acceuil: {
        screen: Home,
        navigationOptions: {
            title: 'Ma Plante',
            headerTitleStyle:{
                textAlign:'center',
            },
            headerStyle:{
                backgroundColor: "#FFFFFF",

            },
            headerTintColor:"#000000",


        }
    },
    MyPlantInfo:{
        screen: MyPlantInfo,
        navigationOptions: {
            title: 'Informations'
        }
    }
})
//-------------------------------------- Route Liste de plantes ---------------------------------
const PlantsListStackNavigator = createStackNavigator({
    PlantsList: {
        screen: PlantsList,
        navigationOptions: {
            headerShown: false,
            title: 'List de plante',
            headerTitleStyle: {textAlign: 'center'}
        }
    },
    PlantDetail: {
        screen: PlantDetail
    }
})

//-------------------------------------------- Navigation du bas ----------------------------------
const TabNavigator = createBottomTabNavigator({
    Acceuil: {
        screen: AcceuilStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <FontAwesomeIcon icon={ faSeedling } />
            }
        }
    },
    MyPlants: {
        screen: PlantsListStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <FontAwesomeIcon icon={ faListUl } />
            }
        }
    },
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            tabBarIcon: () => {
                return <FontAwesomeIcon icon={ faBell } />

            }
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            tabBarIcon: () => {
                return <FontAwesomeIcon icon={ faUser } />

            }
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            tabBarIcon: () => {
                return <FontAwesomeIcon icon={ faUserLock } />

            }
        }
    }
},{
    tabBarOptions: {
        activeBackgroundColor: '#588B43', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
        showLabel: false, // On masque les titres
        showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
})

//----------------------------------- Option de navigation pour l'acceuil ----------------------------------
AcceuilStackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
}
//------------------------------ Option de navigation pour la liste de plantes --------------------------------
PlantsListStackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
}

export default createAppContainer(TabNavigator)