import React from "react";

import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreen = () => (
  <SafeAreaView style={styles.rootContainer}>
    <View style={styles.searchContainer}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.listContainer}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    //backgroundColor: "#008000",
    padding: 16,
  },
  listContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#0000FF",
    padding: 16,
  },
});
