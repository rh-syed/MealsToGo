import React from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components";

export const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const ActivityIndicatorView = styled(View)`
  position: "absolute";
  top: 50%;
  bottom: 50%;
`;

export const ActivityIndicatorAttr = styled(ActivityIndicator).attrs({
  color: (props) => Colors.blue300,
  size: 50,
})`
  margin-left: -25px;
`;

export const ListView = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
