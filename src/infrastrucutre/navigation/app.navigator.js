import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../../features/maps/screen/maps.screen";
import { SettingScreen } from "../../features/settings/screens/settings.screen";
import { RestaurantsNavigator } from "./restaurant.navigator";
import {
  NAV_KEY_MAP_SCREEN,
  NAV_KEY_RESTAURANTS_SCREEN,
  NAV_KEY_SETTINGS_SCREEN,
} from "./utils/navigation-keys";
import { FavoritesContextProvider } from "../../services/favorites/favorite.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsNavigator } from "./settings.navigator";

const TAB = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: theme.colors.ui.error,
    tabBarInactiveTintColor: theme.colors.ui.secondary,
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantContextProvider>
        <TAB.Navigator screenOptions={createScreenOptions}>
          <TAB.Screen
            name={NAV_KEY_RESTAURANTS_SCREEN}
            component={RestaurantsNavigator}
          />
          <TAB.Screen name={NAV_KEY_MAP_SCREEN} component={MapScreen} />
          <TAB.Screen
            name={NAV_KEY_SETTINGS_SCREEN}
            component={SettingsNavigator}
          />
        </TAB.Navigator>
      </RestaurantContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
