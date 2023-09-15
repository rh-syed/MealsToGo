import React from "react";
import { View, SafeAreaView } from "react-native";
import styled from "styled-components";
import { StatusBarHeight } from "./statusbarheight";

export const AreaView = styled(SafeAreaView)`
  flex: 1;
  margintop: ${StatusBarHeight}px;
`;

export const SearchView = styled(View)`
  padding: 16px;
`;

export const ListView = styled(View)`
  flex: 1;
  background-color: blue;
  padding: 16px;
`;
