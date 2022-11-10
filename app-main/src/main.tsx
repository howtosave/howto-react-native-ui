import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PageProvider, adaptNavigationTheme } from 'react-native-paper';

import theme from './theme';
import HomeScreen from './pages/home';
import AboutScreen from './pages/about';

const Stack = createStackNavigator<RootStackParamList>();
const { LightTheme } = adaptNavigationTheme({ light: DefaultTheme });

export default function Main() {
  return (
    <PageProvider theme={theme}>
      <NavigationContainer theme={LightTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PageProvider>
  );
}
