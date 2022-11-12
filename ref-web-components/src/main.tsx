import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

type Page = {
  name: string;
  component: any;
  params: Record<string, any>;
};

const pages: Page[] = [
  {name: 'Home', component: HomeScreen, params: {} },
];

type PageParam = {
  [key in typeof pages[number]['name']]: typeof pages[number]['params'];
};

type HomeProps = NativeStackScreenProps<PageParam, 'Home'>;

function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
      { pages.map((page) => (
        <Button title={`go to ${page.name}`} onPress={() => navigation.navigate(page.name, page.params)} key={page.name}/>
      ))}
    </View>
  );
}

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {pages.map((page) => (
          <Stack.Screen name={page.name} component={page.component} key={page.name} />
        ))}
      </Stack.Navigator>
      <StatusBar style={'auto'} />
    </NavigationContainer>
  );
};

export default Main;
