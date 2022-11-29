import type { DrawerScreenProps } from '@react-navigation/drawer';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { Button } from 'react-native-paper';

import Albums from '../Shared/Albums';
import Article from '../Shared/Article';
import NewsFeed from '../Shared/NewsFeed';
import NaviHeaderLeftButton from './NaviHeaderLeftButton';
import type { RootDrawerParamList } from './pages';

type StackedPageParamList = {
  StackedA: undefined;
  StackedB: undefined;
  StackedC: undefined;
};

export const linkingScreens = {
  StackedA: 'stacked-a',
  StackedB: 'stacked-b',
  StackedC: 'stacked-c',
};

export function StackedA({
  navigation,
}: NativeStackScreenProps<StackedPageParamList>) {
  React.useLayoutEffect(() => {
    console.log('>>>>', navigation.canGoBack());
    if (navigation.canGoBack()) {
      navigation.setOptions({
        headerBackVisible: true,
        headerLeft: (props) => (
          <NaviHeaderLeftButton icon="arrow-back" action="goback" {...props} />
        ),
      });
    }
  }, [navigation]);

  return (
    <>
      <Button onPress={() => navigation.navigate('StackedB')}>goto B</Button>
      <Article />
    </>
  );
}

export function StackedB({
  navigation,
}: NativeStackScreenProps<StackedPageParamList>) {
  return (
    <>
      <Button onPress={() => navigation.navigate('StackedC')}>goto C</Button>
      <NewsFeed />
    </>
  );
}

export function StackedC({
  navigation: _navigation,
}: NativeStackScreenProps<StackedPageParamList>) {
  return (
    <>
      <Albums />
    </>
  );
}

const Stack = createNativeStackNavigator<StackedPageParamList>();

export default function StackedPage({
  navigation,
}: DrawerScreenProps<RootDrawerParamList>) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StackedA"
        component={StackedA}
        options={{
          title: 'A',
        }}
      />
      <Stack.Screen
        name="StackedB"
        component={StackedB}
        options={{
          title: 'B',
        }}
      />
      <Stack.Screen
        name="StackedC"
        component={StackedC}
        options={{
          title: 'C',
        }}
      />
    </Stack.Navigator>
  );
}
