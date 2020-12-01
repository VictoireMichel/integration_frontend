import React from "react";
import MyDrawer from "./Navigation/DrawerNavigation";
import SplashScreen from "react-native-splash-screen";
import {useEffect} from "react";
import {Provider} from 'react-redux'
import Store from "./redux/store"
import PushNotificationIOS from "@react-native-community/push-notification-ios";

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

PushNotification.configure({
    },
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

        // process the action
    },
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
});