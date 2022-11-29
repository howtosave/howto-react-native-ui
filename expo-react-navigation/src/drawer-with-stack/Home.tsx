import { Ionicons } from '@expo/vector-icons';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';

import type { RootDrawerParamList } from './pages';

type Route = {
  key: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  title?: string;
};

type State = NavigationState<Route>;

export function HomeA() {
  return (
    <View>
      <Text>Home A</Text>
    </View>
  );
}

export function HomeB() {
  return (
    <View>
      <Text>Home B</Text>
    </View>
  );
}

export function HomeC() {
  return (
    <View>
      <Text>Home C</Text>
    </View>
  );
}

export default function HomePage({
  navigation: _navigation,
}: DrawerScreenProps<RootDrawerParamList>) {
  const [index, onIndexChange] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    { key: 'HomeA', icon: 'md-chatbubbles', title: 'A' },
    { key: 'HomeB', icon: 'md-people', title: 'B' },
    { key: 'HomeC', icon: 'md-list', title: 'C' },
  ]);
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
    HomeA: HomeA,
    HomeB: HomeB,
    HomeC: HomeC,
  });

  return (
    <TabView
      lazy={false}
      navigationState={{
        index,
        routes,
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
    height: 5,
  },
});
