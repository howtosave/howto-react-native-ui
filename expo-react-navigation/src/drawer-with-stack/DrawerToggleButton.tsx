import { AntDesign } from '@expo/vector-icons';
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
  accessibilityLabel?: string;
  pressColor?: string;
  pressOpacity?: number;
  tintColor?: string;
};

export default function DrawerToggleButton({ tintColor, ...rest }: Props) {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <PlatformPressable
      {...rest}
      accessible
      accessibilityRole="button"
      android_ripple={{ borderless: true }}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={styles.touchable}
      hitSlop={Platform.select({
        ios: undefined,
        default: { top: 16, right: 16, bottom: 16, left: 16 },
      })}
    >
      <AntDesign
        name="menu-fold"
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
