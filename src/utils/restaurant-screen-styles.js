import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: ${(props) => props.theme.flex};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const ListView = styled(View)`
  flex: ${(props) => props.theme.flex};
  background-color: ${(props) => props.theme.colors.ui.error};
  padding: ${(props) => props.theme.space[3]};
`;
