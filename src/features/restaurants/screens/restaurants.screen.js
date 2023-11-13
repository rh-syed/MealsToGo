import React, { useContext, useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import {
  ListView,
  ActivityIndicatorView,
  ActivityIndicatorAttr,
} from "../../../utils/restaurant-screen-styles";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../utils/safe-area.utils";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { FavoritesContext } from "../../../services/favorites/favorite.context";
import { NAV_KEY_RESTAURANT_DETAILS } from "../../../infrastrucutre/navigation/utils/navigation-keys";
import { FadeInView } from "../../../components/animations/fadein.animation";

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setToggled] = useState(false);
  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggled={() => setToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {isLoading && (
        <ActivityIndicatorView>
          <ActivityIndicatorAttr animating={isLoading} />
        </ActivityIndicatorView>
      )}

      <ListView
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(NAV_KEY_RESTAURANT_DETAILS, {
                restaurant: item,
              });
            }}
          >
            <Spacer position="bottom" size="large">
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )}
      />
    </SafeArea>
  );
};
