import type { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import type { RootDrawerParamList } from './pages';

export default function LandingPage({
  navigation,
}: DrawerScreenProps<RootDrawerParamList>) {
  return (
    <View style={styles.container}>
      <Text>Landing</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
