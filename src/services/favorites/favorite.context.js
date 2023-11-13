import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState, createContext, useContext } from "react";
import { FAVORITES_DB_KEY } from "../../utils/db-keys";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const { user } = useContext(AuthenticationContext);
  const storeFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`${FAVORITES_DB_KEY}-${uid}`, jsonValue);
    } catch (e) {
      console.log("Error Storing Favorites", e);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`${FAVORITES_DB_KEY}-${uid}`);
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
      (x) => x.placeId !== restaurant.placeId
    );

    setFavorites(newFavourites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favorites.length) {
      storeFavorites(favorites, user.uid);
    }
  }, [favorites, user]);
  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites: add, removeFavorite: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
