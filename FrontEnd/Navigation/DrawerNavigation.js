import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Navigation5 from "./Navigation5";
import SignIn from "../Account/SignIn";
import SignUp from "../Account/SignUp";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

function MyDrawer () {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Acceuil" component={Navigation5}/>
        <Drawer.Screen name="Connexion" component={SignIn}/>
        <Drawer.Screen name="Enregistrement" component={SignUp}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
