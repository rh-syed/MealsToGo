import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";
import { Text as TypographyText } from "../../components/typography/text.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { RESTAURANT_DETAILS } from "../../infrastrucutre/navigation/utils/navigation-keys";
const FavoritesBarContainer = styled(View)`
  padding: 10px;
`;
export const FavoritesBar = ({ favorites, onNavigate }) => {
  console.log("Favorites Bar Favs ", favorites);
  if (!favorites.length) {
    return null;
  }

  return (
    <FavoritesBarContainer>
      <Spacer position="left" size="medium">
        <TypographyText variant="caption">Favorites</TypographyText>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  });
                }}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesBarContainer>
  );
};
