import React, { useContext } from "react";
import { Text, View } from "react-native";
import { SafeArea } from "../../../utils/safe-area.utils";
import { AuthButton } from "../../account/components/account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Avatar, List } from "react-native-paper";
import { NAV_KEY_FAVORITES_SCREEN } from "../../../infrastrucutre/navigation/utils/navigation-keys";

import { Text as TypographyText } from "../../../components/typography/text.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer size="large">
          <TypographyText variant="label"> {user.email}</TypographyText>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate(NAV_KEY_FAVORITES_SCREEN)}
        />

        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
