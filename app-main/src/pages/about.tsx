import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';

import Layout from '../components/Layout/Layout';

type AboutProps = StackScreenProps<RootStackParamList, 'About'>;

export default function About({ navigation }: AboutProps) {
  return (
    <Layout style={styles.container}>
      <Text>About</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
