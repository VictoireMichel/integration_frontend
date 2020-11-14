import React from "react";
import MyDrawer from "./Navigation/DrawerNavigation";
import {Provider} from 'react-redux'
import Store from "./redux/store"
export default function App () {
  return (
      <Provider store={Store}>
          <MyDrawer/>
      </Provider>
  );
}
