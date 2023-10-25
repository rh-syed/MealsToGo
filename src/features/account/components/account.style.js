import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components";

export const AccountBackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpeg"),
})`
  flex: 1;
  align-items: "center";
  justify-content: "center";
`;
