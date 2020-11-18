import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPlants from "../../Components/PlantList/MyPlants";
import MyPlantInfo from "../../Components/MyPlantInfo";
import { useEffect } from "react";
import LoginControl from "../../Account/LoginControl";
import HomeConnectedWithPot from "../../Components/Home/HomeConnectedWithPot";
import Navigation5 from "../Navigation5";
import HomeConnected from "../../Components/Home/HomeConnected";
import SignUpStep1 from "../../Account/SignUpStep1";
import SignUpStep2 from "../../Account/SignUpStep2";
import SignUpStep3 from "../../Account/SignUpStep3";
import HomeConnectedWithoutPot from "../../Components/Home/HomeConnectedWithoutPot";
import HomeNotConnected from "../../Components/Home/HomeNotConnected";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";


const Stack = createStackNavigator();

function HomeNavigation({ navigation, route }) {
  useEffect(() => {
    if (getFocusedRouteNameFromRoute(route) !== null) {
      if (getFocusedRouteNameFromRoute(route) === 'Details') {
        navigation.setOptions({ tabBarVisible: false });
      } else {
        navigation.setOptions({ tabBarVisible: true });
      }
    }
  });

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ControlNav} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeConnectedWithPot" component={HomeConnectedWithPot} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={MyPlantInfo} options={{ headerShown: false, tabBarVisible: false }} />
        <Stack.Screen name="HomeConnectedWithoutPot" component={HomeConnectedWithoutPot} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={MyPlants} options={{ headerShown: false }}/>
        <Stack.Screen name="HomeNotConnected" component={HomeNotConnected} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function ControlNav(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Control" component={LoginControl} options={{ headerShown: false }}/>
            <Stack.Screen name="Connect" component={HomeConnected} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )

}

export default HomeNavigation;
