import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PageProvider, adaptNavigationTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StoreProvider, I18nProvider } from './redux';

import theme from './theme';
import HomeScreen from './pages/home';
import AboutScreen from './pages/about';
import { SalesTabScreen } from './containers/SalesTab';

const Stack = createNativeStackNavigator<PageParamRootStack>();
const { LightTheme } = adaptNavigationTheme({ light: DefaultTheme });

export default function Main() {
  return (
    <StoreProvider>
      <I18nProvider>
        <PageProvider theme={theme}>
          <SafeAreaProvider>
            <NavigationContainer theme={LightTheme}>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="SalesTab" component={SalesTabScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
              </Stack.Navigator>
              <StatusBar style={!theme.dark ? 'dark' : 'light'} />
            </NavigationContainer>
          </SafeAreaProvider>
        </PageProvider>
      </I18nProvider>
    </StoreProvider>
  );
}
