import React, { useContext } from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../utils/safe-area.utils";
import { AuthButton } from "../../account/components/account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <AuthButton
        mode="contained"
        onPress={() => {
          onLogout();
        }}
      >
        Log Out
      </AuthButton>
    </SafeArea>
  );
};
