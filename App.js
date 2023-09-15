import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.searchContainer}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.listContainer}>
          <Text>List View</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

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
