import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastrucutre/theme/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastrucutre/navigation";
import { FavoritesContextProvider } from "./src/services/favorites/favorite.context";

import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzz-Z_caeruyVqO0jtDb_sv0bdQMEsK78",
  authDomain: "mealstogo-798f9.firebaseapp.com",
  projectId: "mealstogo-798f9",
  storageBucket: "mealstogo-798f9.appspot.com",
  messagingSenderId: "425025172023",
  appId: "1:425025172023:web:19df288c2b138aa1b845b2",
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
