/**
 * See https://docs.expo.dev/versions/v47.0.0/sdk/view-pager/#usage
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ViewPagerScreen() {
  return (
    <View style={styles.viewPager}>
      <View style={styles.page} key="1">
        <Text>First page</Text>
        <Text>Swipe ➡️</Text>
      </View>
      <View style={styles.page} key="2">
        <Text>Second page</Text>
      </View>
      <View style={styles.page} key="3">
        <Text>Third page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
