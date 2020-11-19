import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPlants from "../../Components/PlantList/MyPlants";
import PlantDetail from "../../Components/PlantList/PlantDetail";
import { useEffect } from "react";
import addPotForm from "../../Components/PlantList/addPotForm";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

function ListPlantsNavigation({ navigation, route }) {
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
      <Stack.Screen name="Liste" component={MyPlants} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={PlantDetail} options={{ headerShown: false }} />
      <Stack.Screen name="addPotForm" component={addPotForm} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
export default ListPlantsNavigation;
