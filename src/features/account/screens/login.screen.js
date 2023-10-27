import React, { useContext, useState } from "react";
import {
  AccountBackgroundImage,
  AccountButtonsContainer,
  AccountCoverOverlay,
  AuthButton,
  ErrorContainer,
  MealsToGoTitle,
} from "../components/account.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountTextInput } from "../components/login.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text as TypographyText } from "../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AccountBackgroundImage>
      <AccountCoverOverlay />
      <MealsToGoTitle variant="label">Meals To Go</MealsToGoTitle>
      <AccountButtonsContainer>
        <Spacer size="large">
          <AccountTextInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboard-type="email-address"
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
        </Spacer>
        <Spacer size="large">
          <AccountTextInput
            secureTextEntry={true}
            label="Password"
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        {error && (
          <ErrorContainer>
            <TypographyText variant="error"> {error}</TypographyText>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="location-enter"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountButtonsContainer>
      <Spacer size="large">
        <AuthButton
          mode="contained"
          onPress={() => {
            navigation.goBack();
          }}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackgroundImage>
  );
};
