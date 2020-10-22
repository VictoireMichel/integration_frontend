import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from "react-navigation-drawer";
import SignIn from "../Account/SignIn";
import HamburgerIcon from "../Components/HamburgerIcon";
import BottomTabs from "./BottomTabs";
import SignUp from "../Account/SignUp";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUser, faUserLock} from "@fortawesome/free-solid-svg-icons";




//-------------------------------------------- Navigation page ----------------------------------
const TopNav = createDrawerNavigator(
    {
        Tabs: BottomTabs,
    },
    {
        initialRouteName:'Tabs',
        contentComponent: props => {
            return (
                <View style={styles.slide}>
                    <View>
                        <Text style={styles.text} onPress={()=> {props.navigation.navigate("SignIn")}}>
                            Sign In
                        </Text>
                        <Text style={styles.text} onPress={()=>{props.navigation.navigate("SignUp")}}>
                            Sign Up
                        </Text>
                    </View>
                </View>

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
            headerShown: true,
            title: 'eGrow',
            headerTintColor:'#FFFFFF',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'#588B43',
            },
            headerLeft: ()=> <HamburgerIcon/>
        },
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
    }
)

//----------------------------------- Styles ----------------------------------

const styles = StyleSheet.create({
    slide:{
        flex:1,
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        justifyContent: 'space-around',


    },
    text:{
        backgroundColor: "#284F35",
        color: "#FFFFFF",
        borderWidth: 0,
        borderRadius :5,
        borderColor : "#FFFFFF",
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
    }
});

export default createAppContainer(Stack);

