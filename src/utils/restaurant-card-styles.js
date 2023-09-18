import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components";
import { Card, Text as NativeText } from "react-native-paper";

export const CardTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantCard = styled(Card)`
  backgroundcolor: ${(props) => props.theme.colors.ui.quaternary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundcolor: ${(props) => props.theme.colors.ui.quaternary};
`;
