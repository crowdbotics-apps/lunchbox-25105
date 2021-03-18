import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings216069Navigator from '../features/Settings216069/navigator';
import Settings216061Navigator from '../features/Settings216061/navigator';
import UserProfile216059Navigator from '../features/UserProfile216059/navigator';
import UserProfile216028Navigator from '../features/UserProfile216028/navigator';
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
Settings216069: { screen: Settings216069Navigator },
Settings216061: { screen: Settings216061Navigator },
UserProfile216059: { screen: UserProfile216059Navigator },
UserProfile216028: { screen: UserProfile216028Navigator },
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
