import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
//import logo from "./assets/GTA_Radio copy.png"
export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/GTA_Radio copy.png')}
      style={styles.logo}/>
      <Text> Log in </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E48424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100
  }
});
