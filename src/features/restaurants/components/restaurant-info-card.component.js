import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components";
import { Card, Text as NativeText } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  CardTitle,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantCardContent,
  Address,
  Rating,
  OpenXML,
  RatingAndOpenView,
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <View>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <RestaurantCardContent>
          <CardTitle>{name}</CardTitle>
          <RatingAndOpenView>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            {isOpenNow && <OpenXML xml={open} />}
          </RatingAndOpenView>
          <Address>{address}</Address>
        </RestaurantCardContent>
      </RestaurantCard>
    </View>
  );
};
