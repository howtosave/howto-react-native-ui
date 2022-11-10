import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Provider as PageProvider, adaptNavigationTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from './theme';
import HomeScreen from './pages/home';
import AboutScreen from './pages/about';

const Stack = createStackNavigator<RootStackParamList>();
const { LightTheme } = adaptNavigationTheme({ light: DefaultTheme });

export default function Main() {
  return (
    <PageProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer theme={LightTheme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
          </Stack.Navigator>
          <StatusBar style={!theme.dark ? 'dark' : 'light'} />
        </NavigationContainer>
      </SafeAreaProvider>
    </PageProvider>
  );
}
