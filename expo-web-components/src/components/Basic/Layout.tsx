import React from 'react';
import { View, ScrollView, Platform, StyleSheet, KeyboardAvoidingView } from 'react-native';
import type { ScrollViewProps, ViewProps } from 'react-native';
import { useTheme } from 'react-native-paper';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

interface LayoutProps extends ViewProps, ScrollViewProps {
  navigation: NativeStackNavigationProp<any> | BottomTabNavigationProp<any>;
  withScrollView?: boolean;
  withKeyboardAvoidingView?: boolean;
}

export default function Layout({ withScrollView, withKeyboardAvoidingView, navigation, style, children, ...rest }: LayoutProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const containerStyles = [
    styles.container,
    {
      // backgroundColor: theme.colors.background,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.left,
    },
  ];
  if (withScrollView) {
    return (
      <ScrollView style={[...containerStyles, style]} {...rest} alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    );
  } else {
    if (withKeyboardAvoidingView) return (
      <KeyboardAvoidingView style={[...containerStyles, style]} behavior="padding" {...rest}>
        {children}
      </KeyboardAvoidingView>
    );
    else return (
      <View style={[...containerStyles, style]} {...rest}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

/**

 */