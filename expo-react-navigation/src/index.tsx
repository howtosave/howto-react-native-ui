import * as React from 'react';
import { LogBox, Platform } from 'react-native';

// import RootNavigation from './stack-with-drawer/RootStackNavigation';
import RootNavigation from './drawer-with-stack/RootDrawerNavigation';

if (Platform.OS !== 'web') {
  LogBox.ignoreLogs(['Require cycle:']);
}

export default function App() {
  return <RootNavigation />;
}
