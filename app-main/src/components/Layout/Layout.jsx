import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Layout({ layout, children }) {
  return (
    <View layout={layout}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
}
