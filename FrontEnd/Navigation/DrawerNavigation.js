import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Navigation5 from "./Navigation5";
import SignIn from "../Account/SignIn";
import SignUpStep1 from "../Account/SignUpStep1";
import SignUpStep2 from "../Account/SignUpStep2";
import DrawerContent from "./DrawerContent";
import {createStackNavigator} from "@react-navigation/stack";


const Drawer = createDrawerNavigator();

function MyDrawer () {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Acceuil" component={Navigation5}/>
        <Drawer.Screen name="Connexion" component={SignIn}/>
        <Drawer.Screen name="Enregistrement" component={SignUpNavigation}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function SignUpNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignUpStep1" component={SignUpStep1} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUpStep2" component={SignUpStep2} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default MyDrawer;
