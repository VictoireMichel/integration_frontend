import * as React from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Navigation5 from "./Navigation5";
import SignIn from "../Account/SignIn";
import SignUp from "../Account/SignUp";
import {Button, View} from "react-native";
import Screen from "./Screen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function MyDrawer() {
    return(
        <NavigationContainer>
                 <Drawer.Navigator >
                        <Drawer.Screen name="Acceuil" component={Navigation5}/>
                        <Drawer.Screen name="Connexion" component={SignIn}/>
                        <Drawer.Screen name="Enregistrement" component={SignUp}/>

                 </Drawer.Navigator>
        </NavigationContainer>
    )
}

function stackNavigator() {
    return(

            <Stack.Navigator>
                <Stack.Screen name="EGrow" component={MyDrawer}></Stack.Screen>
                <Stack.Screen name="Nav" component={Screen}/>
            </Stack.Navigator>

    )
}
function navigationHamburger({ navigation }) {
    return(
        <View>
            <Button title="Go to the Drawer" onPress={() => navigation.toggleDrawer()}/>
        </View>
    )
}
export default MyDrawer;