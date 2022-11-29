import type { DrawerScreenProps } from '@react-navigation/drawer';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import Toast from 'react-native-root-toast';

import Contacts from '../Shared/Contacts';
import type { RootDrawerParamList } from './pages';

export default function HomePage({
  navigation,
}: DrawerScreenProps<RootDrawerParamList>) {
  const [backPressed, setBackPressed] = React.useState(false);

  //
  // hardwareBackPress handler
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (backPressed) {
          return false;
        } else {
          setBackPressed(true);
          Toast.show('종료하시려면 `뒤로가기` 버튼을\n한번 더 클릭해주세요', {
            duration: 2000,
          });
          setTimeout(() => setBackPressed(false), 1900);
          return true;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [backPressed])
  );

  return (
    <View style={styles.container}>
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

      <Divider />

      <Button onPress={() => navigation.navigate('Stacked')}>
        goto Stacked
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
