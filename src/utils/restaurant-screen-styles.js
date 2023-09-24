import React from "react";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: ${(props) => props.theme.flex};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const ListView = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
