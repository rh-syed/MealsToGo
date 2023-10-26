import React from "react";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import styled from "styled-components";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastrucutre/theme/colors";
export const AccountBackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpeg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCoverOverlay = styled(View)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountButtonsContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;
