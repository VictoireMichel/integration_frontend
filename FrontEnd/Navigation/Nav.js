import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import Accueil from "../Components/Accueil";
import MyPlants from "../Components/MyPlants";
import Notifications from "../Components/Notifications";
import MyPlantInfo from "../Components/MyPlantInfo"

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSeedling, faBell, faListUl} from '@fortawesome/free-solid-svg-icons'


import {createStackNavigator} from 'react-navigation-stack';
//import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";


const AcceuilStackNavigator = createStackNavigator({
    Acceuil: {
        screen: Accueil,
        navigationOptions: {
            title: 'Ma Plante'
        }
    },
    MyPlantInfo:{
        screen: MyPlantInfo,
    }
})

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
        screen: MyPlants,
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
    }
},{
    tabBarOptions: {
        activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
        showLabel: false, // On masque les titres
        showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
})
/*const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})*/


export default createAppContainer(TabNavigator)