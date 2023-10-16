import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../../features/restaurants/screens/maps.screen";
import { SettingScreen } from "../../features/restaurants/screens/settings.screen";
import { RestaurantsNavigator } from "./restaurant.navigator";

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
  <NavigationContainer>
    <TAB.Navigator screenOptions={createScreenOptions}>
      <TAB.Screen name="Restaurants" component={RestaurantsNavigator} />
      <TAB.Screen name="Map" component={MapScreen} />
      <TAB.Screen name="Settings" component={SettingScreen} />
    </TAB.Navigator>
  </NavigationContainer>
);
