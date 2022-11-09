
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button/Button';

export default function Main() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app~~~</Text>
      <Button >Button</Button>
      <StatusBar style="auto" />
    </View>
  );
}
