import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial216027Navigator from '../features/Tutorial216027/navigator';
import NotificationList215999Navigator from '../features/NotificationList215999/navigator';
import Settings215998Navigator from '../features/Settings215998/navigator';
import Settings215990Navigator from '../features/Settings215990/navigator';
import UserProfile215988Navigator from '../features/UserProfile215988/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial216027: { screen: Tutorial216027Navigator },
NotificationList215999: { screen: NotificationList215999Navigator },
Settings215998: { screen: Settings215998Navigator },
Settings215990: { screen: Settings215990Navigator },
UserProfile215988: { screen: UserProfile215988Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
