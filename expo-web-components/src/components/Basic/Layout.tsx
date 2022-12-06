import type { NavigationProp } from '@react-navigation/native';
import React from 'react';
import type { ScrollViewProps, ViewProps } from 'react-native';
import {
  KeyboardAvoidingView,
  // Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

interface LayoutProps extends ViewProps, ScrollViewProps {
  navigation: NavigationProp<any>;
  withScrollView?: boolean;
  withKeyboardAvoidingView?: boolean;
}

export default function Layout({
  withScrollView,
  withKeyboardAvoidingView,
  style,
  children,
  ...rest
}: LayoutProps) {
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
      <ScrollView
        style={[...containerStyles, style]}
        {...rest}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    );
  } else {
    if (withKeyboardAvoidingView)
      return (
        <KeyboardAvoidingView
          style={[...containerStyles, style]}
          behavior="padding"
          {...rest}
        >
          {children}
        </KeyboardAvoidingView>
      );
    else
      return (
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
