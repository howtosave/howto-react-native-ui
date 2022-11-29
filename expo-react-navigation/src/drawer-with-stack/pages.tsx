import type { LinkingOptions, PathConfigMap } from '@react-navigation/native';
import { createURL } from 'expo-linking';
import React from 'react';
import { Text, View } from 'react-native';

import StackedPage, {
  linkingScreens as stackedLinkingScreens,
} from './Stacked';
import TabbedPage from './Tabbed';

export function PageA() {
  return (
    <View>
      <Text>Page A</Text>
    </View>
  );
}

export function SettingsPage() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

export const PAGES = {
  Tabbed: {
    title: 'Tabbed',
    component: TabbedPage,
    screens: undefined,
  },
  Stacked: {
    title: 'Stacked',
    component: StackedPage,
    screens: stackedLinkingScreens,
  },
  Settings: {
    title: 'Settings',
    component: SettingsPage,
    screens: undefined,
  },
};

export const PAGE_NAMES = Object.keys(PAGES) as (keyof typeof PAGES)[];

export const linkingConfig: LinkingOptions<RootDrawerParamList> = {
  // To test deep linking on, run the following in the Terminal:
  // Android: adb shell am start -a android.intent.action.VIEW -d "exp://127.0.0.1:19000/--/simple-stack"
  // iOS: xcrun simctl openurl booted exp://127.0.0.1:19000/--/simple-stack
  // Android (bare): adb shell am start -a android.intent.action.VIEW -d "rne://127.0.0.1:19000/--/simple-stack"
  // iOS (bare): xcrun simctl openurl booted rne://127.0.0.1:19000/--/simple-stack
  // The first segment of the link is the the scheme + host (returned by `Linking.makeUrl`)
  prefixes: [createURL('/')],
  config: {
    initialRouteName: 'Home',
    screens: PAGE_NAMES.reduce<PathConfigMap<RootDrawerParamList>>(
      (acc, name) => {
        // Convert screen names such as SimpleStack to kebab case (simple-stack)
        const path = name
          .replace(/([A-Z]+)/g, '-$1')
          .replace(/^-/, '')
          .toLowerCase();
        acc[name] = {
          path,
          ...(PAGES[name].screens ? { screens: PAGES[name].screens } : {}),
        };
        return acc;
      },
      {
        Home: '',
        Landing: 'landing',
        NotFound: '*',
      }
    ),
  },
};

type ParamListTypes = {
  Landing: undefined;
  Home: undefined;
  NotFound: undefined;
};

export type RootDrawerParamList = {
  [P in keyof typeof PAGES]: undefined;
} & ParamListTypes;

// Make the default RootParamList the same as the RootStackParamList
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
