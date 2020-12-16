import React from "react";
import MyDrawer from "./Navigation/DrawerNavigation";
import SplashScreen from "react-native-splash-screen";
import {useEffect} from "react";
import {Provider} from 'react-redux'
import Store from "./redux/store"

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
      <Provider store={Store}>
          <MyDrawer />
      </Provider>
  );
}
