import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant.details.screen";
import {
  NAV_KEY_RESTAURANT_DETAILS,
  NAV_KEY_RESTAURANTS_SCREEN,
} from "./utils/navigation-keys";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name={NAV_KEY_RESTAURANTS_SCREEN}
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name={NAV_KEY_RESTAURANT_DETAILS}
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
