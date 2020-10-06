import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Image, StyleSheet} from "react-native";
import Accueil from "../Components/Accueil";
import PlantsList from "../Components/MyPlants";
import PlantDetail from "../Components/PlantDetail";
import Notifications from "../Components/Notifications";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHome, faSeedling, faBell, faListUl} from '@fortawesome/free-solid-svg-icons'


const PlantsListStackNavigator = createStackNavigator({
    PlantsList: {
        screen: PlantsList,
        navigationOptions: {
            title: 'List de plante'
        }
    },
    PlantDetail: {
        screen: PlantDetail
    }
})

const TabNavigator = createBottomTabNavigator({
    Acceuil: {
        screen: Accueil,
        navigationOptions: {
            tabBarIcon: () => {
                return <FontAwesomeIcon icon={ faHome } />
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
    }
},{
    tabBarOptions: {
        activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
        showLabel: false, // On masque les titres
        showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
    }
})
const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
export default createAppContainer(TabNavigator)