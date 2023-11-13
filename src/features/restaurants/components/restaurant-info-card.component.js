import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text as TypographyText } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  RestaurantCardContent,
  Rating,
  Section,
  SectionEnd,
  RestaurantIconStyle,
} from "../../../utils/restaurant-card-styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favorite } from "../../../components/favorites/favorite.component";
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
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <View>
      <RestaurantCard elevation={5}>
        <Favorite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <RestaurantCardContent>
          <TypographyText variant="label">{name}</TypographyText>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`star-${placeId}-${i}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <TypographyText variant="error">
                  CLOSED TEMPORARILY
                </TypographyText>
              )}
              <Spacer position="left" size="large" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="large" />
              <RestaurantIconStyle source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <TypographyText variant="caption">{address}</TypographyText>
        </RestaurantCardContent>
      </RestaurantCard>
    </View>
  );
};
