import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPlants from '../Components/MyPlants';
import MyPlantInfo from "../Components/MyPlantInfo";
import HomeConnectedWithPot from "../Components/Home/HomeConnectedWithPot";

const Stack = createStackNavigator();

function HomeNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeConnectedWithPot} options={{ headerShown: false }}/>
            <Stack.Screen name="Details" component={MyPlantInfo}/>
            <Stack.Screen name="Liste" component={MyPlants} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default HomeNavigation