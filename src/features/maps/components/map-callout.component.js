import React from "react";
import { Image, Platform, Text, View } from "react-native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallOut = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};
