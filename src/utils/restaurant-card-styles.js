import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantIconStyle = styled(Image)`
  width: ${(props) => props.theme.space[3]};
  height: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardContent = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const RatingAndOpenView = styled(View)`
  flex-direction: row;
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
