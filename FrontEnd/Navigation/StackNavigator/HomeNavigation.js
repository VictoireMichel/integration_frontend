import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyPlants from '../../Components/PlantList/MyPlants';
import MyPlantInfo from "../../Components/MyPlantInfo";
import HomeConnectedWithPot from "../../Components/Home/HomeConnectedWithPot";
import {useEffect} from "react";

const Stack = createStackNavigator();

function HomeNavigation({ navigation, route }) {
    useEffect(()=> {
        if(route.state !== undefined){
            if(route.state.index > 0){
                navigation.setOptions({ tabBarVisible: false})
            }else{
                navigation.setOptions({ tabBarVisible: true})
            }
        }
    })

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeConnectedWithPot} options={{ headerShown: false }}/>
            <Stack.Screen name="Details" component={MyPlantInfo} options={ {tabBarVisible:false} }/>
            <Stack.Screen name="Liste" component={MyPlants} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default HomeNavigation