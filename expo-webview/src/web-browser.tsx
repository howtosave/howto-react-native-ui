/**
 * See https://docs.expo.dev/versions/v47.0.0/sdk/webbrowser/
 */
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { openBrowserAsync } from 'expo-web-browser';
import Constants from 'expo-constants';

type AsyncReturnType<T extends (...args: any) => Promise<any>> =
    T extends (...args: any) => Promise<infer R> ? R : any

export default function WebBrowserScreen() {
  const [result, setResult] = useState<AsyncReturnType<typeof openBrowserAsync>>();

  const _handlePressButtonAsync = async () => {
    let result = await openBrowserAsync('https://expo.dev');
    setResult(result);
  };
  return (
    <View style={styles.container}>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
      <Text>{result && JSON.stringify(result)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
