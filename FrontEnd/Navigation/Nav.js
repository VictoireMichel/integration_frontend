import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {Image, StyleSheet} from "react-native";
import Accueil from "../Components/Accueil";
import MyPlants from "../Components/MyPlants";
import Notifications from "../Components/Notifications";

const TabNavigator = createBottomTabNavigator({
    Acceuil: {
        screen: Accueil,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../assets/Images/home.png')}
                    style={styles.icon}
                />
            }
        }
    },
    MyPlants: {
        screen: MyPlants,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../assets/Images/myPlant.png')}
                    style={styles.icon}
                />
            }
        }
    },
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../assets/Images/notif.png')}
                    style={styles.icon}
                />
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