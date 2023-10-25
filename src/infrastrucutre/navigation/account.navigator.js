import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import {
  NAV_KEY_LOGIN_SCREEN,
  NAV_KEY_MAIN_SCREEN,
  NAV_KEY_REGISTER_SCREEN,
} from "./utils/navigation-keys";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={NAV_KEY_MAIN_SCREEN} component={AccountScreen} />
      <Stack.Screen name={NAV_KEY_LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={NAV_KEY_REGISTER_SCREEN} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
