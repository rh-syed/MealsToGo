import React, { useContext } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  ListView,
  ActivityIndicatorView,
  ActivityIndicatorAttr,
} from "../../../utils/restaurant-screen-styles";
import { Pressable } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.utils";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

export const RestaurantScreen = ({ navigation }) => {
  console.log(navigation);
  const { isLoading, restaurants } = useContext(RestaurantContext);
  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <ActivityIndicatorView>
          <ActivityIndicatorAttr animating={isLoading} />
        </ActivityIndicatorView>
      )}

      <ListView
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("RestaurantDetail");
            }}
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </Pressable>
        )}
      />
    </SafeArea>
  );
};
