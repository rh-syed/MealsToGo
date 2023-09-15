import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margintop: ${StatusBar.currentHeight}px;
`;

export const SearchView = styled(View)`
  padding: 16px;
`;

export const ListView = styled(View)`
  flex: 1;
  background-color: yellow;
  padding: 16px;
`;
