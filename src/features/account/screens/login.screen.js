import React, { useContext, useState } from "react";
import {
  AccountBackgroundImage,
  AccountButtonsContainer,
  AccountCoverOverlay,
  AuthButton,
} from "../components/account.style";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountTextInput } from "../components/login.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text as TypographyText } from "../../../components/typography/text.component";
export const LoginScreen = () => {
  const { onLogin, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AccountBackgroundImage>
      <AccountCoverOverlay />
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
          <Spacer size="large">
            <TypographyText variant="error"> {error}</TypographyText>
          </Spacer>
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
    </AccountBackgroundImage>
  );
};
