import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { SettingScreen } from "../../features/settings/screens/settings.screen";
import {
  NAV_KEY_FAVORITES_SCREEN,
  NAV_KEY_SETTINGS_SCREEN,
} from "./utils/navigation-keys";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name={NAV_KEY_SETTINGS_SCREEN}
        component={SettingScreen}
      />
      <SettingsStack.Screen
        name={NAV_KEY_FAVORITES_SCREEN}
        component={FavoritesScreen}
      />
    </SettingsStack.Navigator>
  );
};
