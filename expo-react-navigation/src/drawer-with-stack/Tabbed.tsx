import { Ionicons } from '@expo/vector-icons';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';

import Albums from '../Shared/Albums';
import Article from '../Shared/Article';
import NewsFeed from '../Shared/NewsFeed';
import type { RootDrawerParamList } from './pages';

type Route = {
  key: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  title?: string;
};

type State = NavigationState<Route>;

export function TabbedA() {
  return (
    <>
      <Article />
    </>
  );
}

export function TabbedB() {
  return (
    <>
      <NewsFeed />
    </>
  );
}

export function TabbedC() {
  return (
    <>
      <Albums />
    </>
  );
}

const _tabRoutes: Route[] = [
  { key: 'TabbedA', icon: 'md-chatbubbles', title: 'A' },
  { key: 'TabbedB', icon: 'md-people', title: 'B' },
  { key: 'TabbedC', icon: 'md-list', title: 'C' },
];

export type TabName = typeof _tabRoutes[number]['key'];

export default function TabbedPage({
  navigation: _navigation,
  route,
}: DrawerScreenProps<RootDrawerParamList>) {
  const { params } = route;
  const idx = params?.screen
    ? _tabRoutes.findIndex((e) => e.key === params.screen)
    : 0;

  const [index, onIndexChange] = React.useState(idx);
  const [tabRoutes] = React.useState(_tabRoutes);
  const theme = useTheme();

  const renderIcon = ({ route, color }: { route: Route; color: string }) => (
    <Ionicons name={route.icon} size={24} color={color} />
  );

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      renderIcon={renderIcon}
      indicatorStyle={[
        styles.indicator,
        { backgroundColor: theme.colors.onPrimary },
      ]}
      style={[styles.tabbar, { backgroundColor: theme.colors.primary }]}
      labelStyle={[styles.label, { color: theme.colors.onPrimary }]}
      inactiveColor={theme.colors.backdrop}
    />
  );

  const renderScene = SceneMap({
    TabbedA: TabbedA,
    TabbedB: TabbedB,
    TabbedC: TabbedC,
  });

  return (
    <TabView
      lazy={false}
      navigationState={{
        index,
        routes: tabRoutes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={onIndexChange}
      tabBarPosition="bottom"
    />
  );
}

const styles = StyleSheet.create({
  tabbar: {
    height: 60,
  },
  label: {
    fontSize: 12,
  },
  indicator: {
    height: 3,
  },
});
