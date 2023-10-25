import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState, createContext } from "react";
import { FAVORITES_DB_KEY } from "../../utils/db-keys";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const storeFavorites = async (value) => {
    try {
      console.log(value);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(FAVORITES_DB_KEY, jsonValue);
    } catch (e) {
      console.log("Error Storing Favorites", e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem(FAVORITES_DB_KEY);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error Loading Favorites", e);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId,
    );

    setFavorites(newFavourites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    storeFavorites(favorites);
  }, [favorites]);
  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites: add, removeFavorite: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
