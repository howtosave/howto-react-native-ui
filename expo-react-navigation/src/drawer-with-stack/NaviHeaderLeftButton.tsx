import { Ionicons } from '@expo/vector-icons';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { PlatformPressable } from '@react-navigation/elements';
import {
  DrawerActions,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

type Props = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  action: 'goback' | 'toggle-drawer';
  accessibilityLabel?: string;
  pressColor?: string;
  pressOpacity?: number;
  tintColor?: string;
};

export default function NaviHeaderLeftButton({
  icon,
  action,
  tintColor,
  ...rest
}: Props) {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <PlatformPressable
      {...rest}
      accessible
      accessibilityRole="button"
      android_ripple={{ borderless: true }}
      onPress={() =>
        action === 'goback'
          ? navigation.goBack()
          : navigation.dispatch(DrawerActions.toggleDrawer())
      }
      style={styles.touchable}
      hitSlop={Platform.select({
        ios: undefined,
        default: { top: 16, right: 16, bottom: 16, left: 16 },
      })}
    >
      <Ionicons
        name={icon}
        size={24}
        style={[styles.icon, tintColor ? { color: tintColor } : null]}
      />
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    margin: 3,
    resizeMode: 'contain',
  },
  touchable: {
    marginHorizontal: 11,
  },
});
