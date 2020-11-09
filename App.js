import React from "react";
import MyDrawer from "./Navigation/DrawerNavigation";
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from "react";

export default function App () {

  useEffect(() => {SplashScreen.hide();
  }, []);

  return (
      <MyDrawer/>
  );
}
