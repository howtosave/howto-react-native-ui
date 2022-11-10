import React from 'react';
import { View, ViewProps, Platform, StyleSheet } from 'react-native';
import { Appbar, BottomNavigation, Menu, useTheme } from 'react-native-paper';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

interface LayoutProps extends ViewProps {
  navigation: NativeStackNavigationProp<any> | BottomTabNavigationProp<any>;
}

export default function Layout({ navigation, style, children }: LayoutProps) {
  // const { isV3 } = useTheme();
  // const [menuVisible, setMenuVisible] = React.useState(false);
  // const [sceneAnimation, setSceneAnimation] =
  //   React.useState<
  //     React.ComponentProps<typeof BottomNavigation>['sceneAnimationType']
  //   >();

  return (
    <React.Fragment>
      {/* <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Bottom Navigation" />
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Appbar.Action
              icon={MORE_ICON}
              onPress={() => setMenuVisible(true)}
              {...(!isV3 ? { color: 'white' } : {})}
            />
          }
        >
          <Menu.Item
            trailingIcon={sceneAnimation === undefined ? 'check' : undefined}
            onPress={() => {
              setSceneAnimation(undefined);
              setMenuVisible(false);
            }}
            title="Scene animation: none"
          />
          <Menu.Item
            trailingIcon={sceneAnimation === 'shifting' ? 'check' : undefined}
            onPress={() => {
              setSceneAnimation('shifting');
              setMenuVisible(false);
            }}
            title="Scene animation: shifting"
          />
          <Menu.Item
            trailingIcon={sceneAnimation === 'opacity' ? 'check' : undefined}
            onPress={() => {
              setSceneAnimation('opacity');
              setMenuVisible(false);
            }}
            title="Scene animation: opacity"
          />
        </Menu>
      </Appbar.Header> */}

    <View style={style}>
      {children}
    </View>
    </React.Fragment>
  );
}
