import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MyPlants from '../Components/MyPlants';
import PlantDetail from "../Components/PlantDetail";
import MyPlantInfo from "../Components/MyPlantInfo";
import HomeConnectedWithPot from "../Components/Home/HomeConnectedWithPot";
import Notifications from "../Components/Notifications";
import { faSeedling, faBell, faListUl } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function Navigation5() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator tabBarOptions={{
                activeBackgroundColor: "#588B43", // Couleur d'arrière-plan de l'onglet sélectionné
                inactiveBackgroundColor: "#f1f1f1", // Couleur d'arrière-plan des onglets non sélectionnés
                showLabel: false, // On masque les titres
                showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définies
            }}>
                <BottomTab.Screen
                    name="Acceuil"
                    component={HomeNavigation}
                    options={{
                        tabBarIcon: () => {
                            return <FontAwesomeIcon icon={ faSeedling } />; // style={styles.icon}
                    }
                }}/>
                <BottomTab.Screen
                    name="List"
                    component={MyPlants}
                    options={{
                        tabBarIcon: () => {
                            return <FontAwesomeIcon icon={faListUl}/>; // style={styles.icon}
                        }
                    }}/>
                <BottomTab.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{
                        tabBarIcon: () => {
                            return <FontAwesomeIcon icon={faBell}/>; // style={styles.icon}
                        }
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>

    );
}

function HomeNavigation() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeConnectedWithPot}
                              options={{
                                  headerShown: true
                              }}
                />
                <Stack.Screen name="Details" component={MyPlantInfo}/>
            </Stack.Navigator>
    );
}

function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="MyPlants" component={MyPlants}/>
                <Stack.Screen name="Root" component={HomeNavigation}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
export default Navigation5;