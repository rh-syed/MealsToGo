import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FavoritesContext } from "../../services/favorites/favorite.context";
import { AntDesign } from "@expo/vector-icons";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);
  {
    /* console.log("isFav", isFavorite); 
     console.log("restaurant Id ", restaurant.placeId);*/
  }

  return (
    <FavoriteButton
      onPress={() => {
        !isFavorite ? addToFavorites(restaurant) : removeFavorite(restaurant);
      }}
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};
