import React from 'react';
import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSeedling, faBell, faListUl, faUser, faUserLock} from '@fortawesome/free-solid-svg-icons'
import AnimatedTabBar, {TabsConfigsType} from "curved-bottom-navigation-bar";

import PlantsList from "../Components/MyPlants";
import PlantDetail from "../Components/PlantDetail";
import Home from "../Components/Home";
import Notifications from "../Components/Notifications";
import MyPlantInfo from "../Components/MyPlantInfo";
import SignUp from "../Account/SignUp";
import SignIn from "../Account/SignIn";



//-------------------------------------------- Route Acceuil ----------------------------------
const AcceuilStackNavigator = createStackNavigator({
    Acceuil: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
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
            headerShown: false, // Permet de cacher le header
        }
    },
    PlantDetail: {
        screen: PlantDetail,
        navigationOptions: {
            title: 'Détails sur la plante',
            headerStyle:{
                backgroundColor: "#f1f1f1",

            },
        }
    }
})



//-------------------------------------------- Navigation du bas ----------------------------------
const TabNavigator = createBottomTabNavigator({
    Acceuil: {
        screen: AcceuilStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <FontAwesomeIcon icon={ faSeedling } /> // style={styles.icon}
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

            },
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            tabBarIcon: () => {
                return <FontAwesomeIcon icon={ faUserLock } />

            },
        }
    }
},{
    tabBarOptions: {
        activeBackgroundColor: '#588B43', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#f1f1f1', // Couleur d'arrière-plan des onglets non sélectionnés
        showLabel: false, // On masque les titres
        showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis

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

const styles = StyleSheet.create({
   icon: {
       fontSize: 5,
       color: '#fff',
       backgroundColor: '#588B43',
       //padding: 30,
       //paddingTop: 55,
       //paddingRight: 40,
       //borderRadius: 10
   }
});

export default createAppContainer(TabNavigator)