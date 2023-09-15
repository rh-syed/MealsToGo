import React from "react";

import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  AreaView,
  SearchView,
  ListView,
} from "../../../utils/restaurant-screen-styles";

export const RestaurantScreen = () => (
  <AreaView>
    <SearchView>
      <Searchbar placeholder="Search" />
    </SearchView>
    <ListView>
      <RestaurantInfoCard />
    </ListView>
  </AreaView>
);
