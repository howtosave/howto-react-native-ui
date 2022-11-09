import React from 'react';
import { View, ViewProps } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface LayoutProps extends ViewProps {
}

export default function Layout({ style, children }) {
  return (
    <View style={style}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
}
