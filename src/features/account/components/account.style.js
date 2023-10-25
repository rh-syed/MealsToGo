import React from "react";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import styled from "styled-components";

export const AccountBackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpeg"),
})`
  flex: 1;
  align-items: "center";
  justify-content: "center";
`;

export const AccountCoverOverlay = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
