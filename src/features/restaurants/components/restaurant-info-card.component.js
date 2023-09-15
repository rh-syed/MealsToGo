import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components";
import { Card, Text as NativeText } from "react-native-paper";
import {
  CardTitle,
  RestaurantCard,
  RestaurantCardCover,
} from "../../../utils/restaurant-card-styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <View>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <CardTitle>{name}</CardTitle>
        </Card.Content>
      </RestaurantCard>
    </View>
  );
};
