import type { LinkingOptions, PathConfigMap } from '@react-navigation/native';
import { createURL } from 'expo-linking';
import React from 'react';
import { Text, View } from 'react-native';

export function PageA() {
  return (
    <View>
      <Text>Page A</Text>
    </View>
  );
}

export function PageB() {
  return (
    <View>
      <Text>Page B</Text>
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
  PageA: {
    title: 'Page A',
    component: PageA,
  },
  PageB: {
    title: 'Page B',
    component: PageB,
  },
  Settings: {
    title: 'Settings',
    component: SettingsPage,
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
          screens: {
            Article: {
              path: 'article/:author?',
              parse: {
                author: (author: string) =>
                  author.charAt(0).toUpperCase() +
                  author.slice(1).replace(/-/g, ' '),
              },
              stringify: {
                author: (author: string) =>
                  author.toLowerCase().replace(/\s/g, '-'),
              },
            },
            Albums: 'music',
            Chat: 'chat',
            Contacts: 'people',
            NewsFeed: 'feed',
            Dialog: 'dialog',
          },
        };
        return acc;
      },
      {
        Home: {
          screens: {
            HomeDrawer: '',
          },
        },
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
