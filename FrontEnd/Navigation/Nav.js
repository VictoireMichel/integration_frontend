import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native'
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faSeedling, faBell, faListUl, faUser, faUserLock, faCog} from '@fortawesome/free-solid-svg-icons'
import AnimatedTabBar, {TabsConfigsType} from "curved-bottom-navigation-bar";
import {createDrawerNavigator} from "react-navigation-drawer";
import {Ionicons} from "@expo/vector-icons";

import { DrawerActions } from '@react-navigation/native';

import PlantsList from "../Components/MyPlants";
import PlantDetail from "../Components/PlantDetail";
import Home from "../Components/Home";
import Notifications from "../Components/Notifications";
import MyPlantInfo from "../Components/MyPlantInfo";
import SignUp from "../Account/SignUp";
import SignIn from "../Account/SignIn";
import Settings from "../Components/Settings";
import Header from "../Components/Header";

import HamburgerIcon from "../Components/HamburgerIcon";

import BottomTabs from "./BottomTabs";




//-------------------------------------------- Navigation page ----------------------------------
const TopNav = createDrawerNavigator(
    {
        Tabs: BottomTabs,
    },
    {
        initialRouteName:'Tabs',
        contentComponent: props => {
            return (
                <ScrollView>
                    <SafeAreaView forceInset={{top:'always', horizontal:'never'}}>
                        <Text onPress={()=> {props.navigation.navigate("SignIn")}}>
                            Sign In
                        </Text>
                        <Text onPress={()=>{props.navigation.navigate("SignUp")}}>
                            Sign Up
                        </Text>
                    </SafeAreaView>
                </ScrollView>

            )
        }
    }
)

//----------------------------------- Navigation du haut ----------------------------------
const Stack = createStackNavigator(
    {

    EGrow: {
        screen: TopNav,
        navigationOptions:{
            headerTintColor:'#FFFFFF',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'#588B43',
            },
            headerLeft: ()=> <HamburgerIcon/>
        },
    },

    }
)

//----------------------------------- Styles ----------------------------------

const styles = StyleSheet.create({
    icon: {
        fontSize: 5,
        color: '#fff',
        backgroundColor: '#588B43',
        //padding: 30,
        //paddingTop: 55,
        //paddingRight: 40,
        //borderRadius: 10
    },
    favorite_image: {
        color:'#FFFFFF',
        justifyContent:'flex-end'
    }
});

export default createAppContainer(Stack);

