import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { MapScreen } from "./src/features/restaurants/screens/maps.screen";
import { SettingScreen } from "./src/features/restaurants/screens/settings.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastrucutre/theme/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
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
    tabBarInactiveTintColor: theme.colors.ui.disabled,
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};
const TAB = createBottomTabNavigator();
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <TAB.Navigator screenOptions={createScreenOptions}>
                <TAB.Screen name="Restaurants" component={RestaurantScreen} />
                <TAB.Screen name="Map" component={MapScreen} />
                <TAB.Screen name="Settings" component={SettingScreen} />
              </TAB.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
