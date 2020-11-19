import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPlants from "../../Components/PlantList/MyPlants";
import MyPlantInfo from "../../Components/potDetails/MyPlantInfo";
import { useEffect } from "react";
import LoginControl from "../../Account/LoginControl";
import HomeConnectedWithPot from "../../Components/Home/HomeConnectedWithPot";
import HomeConnected from "../../Components/Home/HomeConnected";
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
      <Stack.Screen name="Home" component={HomeConnectedOrNotNav} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={MyPlantInfo} />
      <Stack.Screen name="List" component={MyPlants} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function HomeConnectedOrNotNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Control" component={LoginControl} options={{ headerShown: false }} />
      <Stack.Screen name="HomeConnected" component={HomeConnectedNav} options={{ headerShown: false }} />
      <Stack.Screen name="HomeNotConnected" component={HomeNotConnected} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function HomeConnectedNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeConnected" component={HomeConnected} options={{ headerShown: false }} />
      <Stack.Screen name="HomeConnectedWithPot" component={HomeConnectedWithPot} options={{ headerShown: false }} />
      <Stack.Screen name="HomeConnectedWithoutPot" component={HomeConnectedWithoutPot} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default HomeNavigation;
