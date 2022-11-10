import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SalesStatus from '../../pages/sales-mgmt/sales-status';
import SalesStats from '../../pages/sales-mgmt/sales-stats';
import theme from '../../theme';

const images = {
  'SalesStatus': require('./images/favicon.png'),
  'SalesStatus_focused': require('./images/favicon.png'),
  'SalesStats': require('./images/favicon.png'),
  'SalesStats_focused': require('./images/favicon.png'),
}

const SalesTab = createBottomTabNavigator<PageParamSales>();

export const SalesTabScreen = () => (
  <SalesTab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let imgSrc;

        if (route.name === 'SalesStatus') {
          imgSrc = images[`SalesStatus${focused ? '_focused' : ''}`];
        } else if (route.name === 'SalesStats') {
          imgSrc = images[`SalesStats${focused ? '_focused' : ''}`];
        }

        return <Image source={imgSrc} fadeDuration={0} style={{ width: 25, height: 25 }}/>;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.backdrop,
      tabBarActiveBackgroundColor: theme.colors.inverseOnSurface,
      tabBarInactiveBackgroundColor: theme.colors.surfaceVariant,
      headerShown: false,
    })}>
    <SalesTab.Screen name="SalesStatus" component={SalesStatus} />
    <SalesTab.Screen name="SalesStats" component={SalesStats} />
  </SalesTab.Navigator>
);
