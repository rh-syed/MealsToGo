import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.rootContainer}>
          <View style={styles.searchContainer} >
            <Text>Search Bar</Text>
          </View>
          <View style={styles.listContainer} >
            <Text>List View</Text>
          </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootContainer: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#008000',
    padding: 16
  },
  listContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#0000FF',
    padding: 16
  }
});
