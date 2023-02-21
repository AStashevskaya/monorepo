import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getSiteInfo } from "site-info";

export default function App() {
const siteInfo = getSiteInfo()
    return (
      <View style={styles.container}>
        <Text> {siteInfo.title} </Text>
        <Text> {siteInfo.subtitle} </Text>
        <Text>Open</Text>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
