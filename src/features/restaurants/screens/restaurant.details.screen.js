import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.utils";
import { RestaurantMenu } from "./menu.screen";
import { ScrollView } from "react-native";
export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />

        <RestaurantMenu />
      </ScrollView>
    </SafeArea>
  );
};
