import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => {
          <Text>RestaurantDetail</Text>;
        }}
      />
    </RestaurantStack.Navigator>
  );
};
