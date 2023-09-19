import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const CardTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantCardContent = styled(View)`
  backgroundcolor: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.ui.quaternary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.ui.quaternary};
`;
