import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';

import Layout from '../components/Layout/Layout';

type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: HomeProps) {
  return (
    <Layout style={styles.container} navigation={navigation}>
      <Text>HOME</Text>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
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
