import React from "react";

import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  SafeArea,
  SearchView,
  ListView,
} from "../../../utils/restaurant-screen-styles";

export const RestaurantScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar placeholder="Search" />
    </SearchView>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </SafeArea>
);
