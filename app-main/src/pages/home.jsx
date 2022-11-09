import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import Layout from '../components/Layout/Layout';

export default function Home({ navigation }) {
  return (
    <Layout style={styles.container}>
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
