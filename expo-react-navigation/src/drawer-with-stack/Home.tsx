import type { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

import Contacts from '../Shared/Contacts';
import type { RootDrawerParamList } from './pages';

export default function HomePage({
  navigation,
}: DrawerScreenProps<RootDrawerParamList>) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Stacked')}>
        goto Stacked
      </Button>
      <Button
        onPress={() =>
          navigation.navigate('Tabbed', {
            screen: 'TabbedB',
            param: {},
          })
        }
      >
        goto TabbedB in Tabbed
      </Button>

      <Contacts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
