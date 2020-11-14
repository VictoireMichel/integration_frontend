import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyPlants from "../../Components/PlantList/MyPlants";
import PlantDetail from "../../Components/PlantList/PlantDetail";
import { useEffect } from "react";
import addPotForm from "../../Components/PlantList/addPotForm";

const Stack = createStackNavigator();

function ListPlantsNavigation({ navigation, route }) {
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
      <Stack.Screen name="Liste" component={MyPlants} options={{ headerShown: false }} />
      <Stack.Screen name="Details" component={PlantDetail} options={{ headerShown: false }} />
      <Stack.Screen name="addPotForm" component={addPotForm} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
export default ListPlantsNavigation;
