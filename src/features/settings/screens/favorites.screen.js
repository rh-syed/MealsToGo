import React, { useContext } from "react";
import { Text, View } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorite.context";
import { SafeArea } from "../../../utils/safe-area.utils";
import { ListView } from "../../../utils/restaurant-screen-styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NAV_KEY_RESTAURANT_DETAILS } from "../../../infrastrucutre/navigation/utils/navigation-keys";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import styled from "styled-components";
import { Text as TypographyText } from "../../../components/typography/text.component";
const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  return favorites.length ? (
    <SafeArea>
      <ListView
        data={favorites}
        keyExtractor={(item) => item.name}
        renderItem={(item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(NAV_KEY_RESTAURANT_DETAILS, {
                  restaurant: item,
                });
              }}
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item.item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <TypographyText varaint="label">No Favorites Yet</TypographyText>
    </NoFavoritesArea>
  );
};
