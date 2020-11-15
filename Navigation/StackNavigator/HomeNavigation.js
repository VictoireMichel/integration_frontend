import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPlants from "../../Components/PlantList/MyPlants";
import MyPlantInfo from "../../Components/MyPlantInfo";
import { useEffect } from "react";
import LoginControl from "../../Account/LoginControl";
import HomeConnectedWithPot from "../../Components/Home/HomeConnectedWithPot";
import Navigation5 from "../Navigation5";


const Stack = createStackNavigator();



function HomeNavigation ({ navigation, route }) {
  useEffect(() => {
    if (route.state !== undefined) {
      if (route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false });
      } else {
        navigation.setOptions({ tabBarVisible: true });
      }
    }
  });

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={LoginControl} options={{ headerShown: false }}/>
      <Stack.Screen name="Details" component={MyPlantInfo} options={ { tabBarVisible: false } }/>
      <Stack.Screen name="List" component={MyPlants} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default HomeNavigation;
