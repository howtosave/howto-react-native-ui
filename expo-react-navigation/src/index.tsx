import * as React from 'react';
import {
  LogBox,
  Platform,
} from 'react-native';
import RootStackNavigation from './RootStackNavigation';

if (Platform.OS !== 'web') {
  LogBox.ignoreLogs(['Require cycle:']);
}

export default function App() {
  return (
    <RootStackNavigation />
  );
}
