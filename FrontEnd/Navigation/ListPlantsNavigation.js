import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPlants from '../Components/MyPlants';
import PlantDetail from "../Components/PlantDetail";

const Stack = createStackNavigator();

function ListPlantsNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Liste" component={MyPlants} options={{ headerShown: false }}/>
            <Stack.Screen name="Details" component={PlantDetail}/>
        </Stack.Navigator>
    );
}

export default ListPlantsNavigation;