import React from "react";
import {
  AccountBackgroundImage,
  AccountCoverOverlay,
} from "../components/account.style";

export const AccountScreen = () => {
  return (
    <AccountBackgroundImage>
      <AccountCoverOverlay />
    </AccountBackgroundImage>
  );
};
