import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import styled from "styled-components";
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
  Section,
  SectionEnd,
  ClosedText,
  SpacingView16,
  RestaurantIconStyle,
} from "../../../utils/restaurant-card-styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <View>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <RestaurantCardContent>
          <CardTitle>{name}</CardTitle>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <ClosedText variant="label">CLOSED TEMPORARILY</ClosedText>
              )}
              <SpacingView16 />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <SpacingView16 />
              <RestaurantIconStyle source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </RestaurantCardContent>
      </RestaurantCard>
    </View>
  );
};
