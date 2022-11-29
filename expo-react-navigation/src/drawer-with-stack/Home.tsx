import { Ionicons } from '@expo/vector-icons';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Dimensions, ScaledSize, StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
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

const useIsLargeScreen = () => {
  const [dimensions, setDimensions] = React.useState(Dimensions.get('window'));

  React.useEffect(() => {
    const onDimensionsChange = ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    };

    const dimSub = Dimensions.addEventListener('change', onDimensionsChange);

    return () => dimSub.remove();
  }, []);

  return dimensions.width > 414;
};

const Header = ({
  onGoBack,
  title,
}: {
  onGoBack?: () => void;
  title: string;
}) => {
  const { colors } = useTheme();
  const isLargeScreen = useIsLargeScreen();

  return (
    <Appbar.Header style={{ backgroundColor: colors.card, elevation: 1 }}>
      {isLargeScreen ? null : <Appbar.BackAction onPress={onGoBack} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export function HomeA() {
  return (
    <>
      <Article />
    </>
  );
}

export function HomeB() {
  return (
    <>
      <NewsFeed />
    </>
  );
}

export function HomeC() {
  return (
    <>
      <Albums />
    </>
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
    height: 3,
  },
});
