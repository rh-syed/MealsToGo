import React from "react";
import {
  AccountBackgroundImage,
  AccountButtonsContainer,
  AccountCoverOverlay,
  AuthButton,
  MealsToGoTitle,
} from "../components/account.style";
import {
  NAV_KEY_LOGIN_SCREEN,
  NAV_KEY_REGISTER_SCREEN,
} from "../../../infrastrucutre/navigation/utils/navigation-keys";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackgroundImage>
      <AccountCoverOverlay />
      <MealsToGoTitle>Meals To Go</MealsToGoTitle>
      <AccountButtonsContainer>
        <Spacer size="large">
          <AuthButton
            icon="location-enter"
            mode="contained"
            onPress={() => navigation.navigate(NAV_KEY_LOGIN_SCREEN)}
          >
            Login
          </AuthButton>
        </Spacer>

        <Spacer size="large">
          <AuthButton
            icon="email-check-outline"
            mode="contained"
            onPress={() => navigation.navigate(NAV_KEY_REGISTER_SCREEN)}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountButtonsContainer>
    </AccountBackgroundImage>
  );
};
