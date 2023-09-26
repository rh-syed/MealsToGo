import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: ${(props) => props.theme.flex};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
