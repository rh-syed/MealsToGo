import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components";
import { Card, Text as NativeText } from "react-native-paper";

export const CardTitle = styled.Text`
  padding: 16px;
  color: purple;
`;

export const RestaurantCard = styled(Card)`
  backgroundcolor: white;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: white;
`;
