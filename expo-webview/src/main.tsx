import { NavigationContainer } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, View } from 'react-native';

import ViewPagerScreen from './view-pager';
import WebBrowserScreen from './web-browser';
import WebViewScreen from './web-view';

const Stack = createNativeStackNavigator();

type Page = {
  name: string;
  component: any;
  params: Record<string, any>;
};

const pages: Page[] = [
  { name: 'Home', component: HomeScreen, params: {} },
  { name: 'WebView', component: WebViewScreen, params: {} },
  { name: 'WebBrowser', component: WebBrowserScreen, params: {} },
  { name: 'ViewPager', component: ViewPagerScreen, params: {} },
];

type PageParam = {
  [key in typeof pages[number]['name']]: typeof pages[number]['params'];
};

type HomeProps = NativeStackScreenProps<PageParam, 'Home'>;

function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={{ flex: 1 }}>
      {pages.map((page) => (
        <Button
          title={`go to ${page.name}`}
          onPress={() => navigation.navigate(page.name, page.params)}
          key={page.name}
        />
      ))}
    </View>
  );
}

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {pages.map((page) => (
          <Stack.Screen
            name={page.name}
            component={page.component}
            key={page.name}
          />
        ))}
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};

export default Main;
