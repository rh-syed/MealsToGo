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
        <NavigationContainer>
          <TAB.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Restaurants") {
                  iconName = focused ? "fast-food" : "fast-food-outline";
                } else if (route.name === "Map") {
                  iconName = focused ? "map" : "map-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "settings-sharp" : "settings-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <TAB.Screen name="Restaurants" component={RestaurantScreen} />
            <TAB.Screen name="Map" component={MapScreen} />
            <TAB.Screen name="Settings" component={SettingScreen} />
          </TAB.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
