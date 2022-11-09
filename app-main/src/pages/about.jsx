import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Layout from '../components/Layout/Layout';

export default function About({ navigation }) {
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
