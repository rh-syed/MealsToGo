import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  SafeArea,
  SearchView,
  ListView,
} from "../../../utils/restaurant-screen-styles";
import { Spacer } from "../../../components/spacer/spacer.component";
export const RestaurantScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar placeholder="Search" />
    </SearchView>
    <ListView
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
      ]}
      keyExtractor={(item) => item.name}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
    />
  </SafeArea>
);
