import React from "react";
import { Platform, Text } from "react-native";
import { Text as TypographyText } from "../../components/typography/text.component";
import {
  CompactImage,
  CompactItem,
  CompactWebView,
} from "../../utils/map-screen-styles";

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const CalloutImage = isAndroid ? CompactWebView : CompactImage;
  return (
    <CompactItem>
      <CalloutImage source={{ uri: restaurant.photos[0] }} />
      <TypographyText center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </TypographyText>
    </CompactItem>
  );
};
