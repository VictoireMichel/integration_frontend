import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { faSeedling, faBell, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Notifications from "../Components/Notifications";
import ListPlantsNavigation from "./StackNavigator/ListPlantsNavigation";
import HomeNavigation from "./StackNavigator/HomeNavigation";
import CustomHeader from "./Header/CustomHeader";
import { Container } from "native-base";

const BottomTab = createBottomTabNavigator();

//* **************************************** BOTTOM NAVIGATION *********************************//
function Navigation5({ navigation }) { // 2nd param : route
  return (
    <Container>

      <CustomHeader nav={navigation} />

      <BottomTab.Navigator tabBarOptions={{
        activeBackgroundColor: "#588B43", // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: "#f1f1f1", // Couleur d'arrière-plan des onglets non sélectionnés
        showLabel: false, // On masque les titres
        showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définies
      }}>
        <BottomTab.Screen name="Acceuil" component={HomeNavigation}
          options={{
            tabBarIcon: () => {
              return <FontAwesomeIcon icon={faSeedling} />;
            }
            // tabBarVisible: (route.state === undefined) ? (true) : (route.state.routes[0].state.index > 0 ? false : true)
            // Pour retirer la bottom bar
          }} />
        <BottomTab.Screen name="List" component={ListPlantsNavigation}
          options={{
            tabBarIcon: () => {
              return <FontAwesomeIcon icon={faListUl} />;
            }
            // tabBarVisible: (route.state === undefined) ? (true) : (route.state.routes[0].state.index > 0 ? false : true)
            // Pour retirer la bottom bar
          }} />
        <BottomTab.Screen name="Notifications" component={Notifications}
          options={{
            tabBarIcon: () => {
              return <FontAwesomeIcon icon={faBell} />;
            }
          }}
        />
      </BottomTab.Navigator>
    </Container>
  );
}

export default Navigation5;
