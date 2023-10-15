import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.utils";
import { Spacer } from "../../../components/spacer/spacer.component";
export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <Spacer position="bottom" size="large">
        <RestaurantInfoCard restaurant={restaurant} />
      </Spacer>
    </SafeArea>
  );
};
