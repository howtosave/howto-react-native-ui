import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import { withTranslation, WithTranslation } from 'react-i18next';

import Layout from '../components/Layout/Layout';

type AboutProps = WithTranslation<'pageAbout'> & StackScreenProps<RootStackParamList, 'About'>;

function About({ navigation, t }: AboutProps) {
  return (
    <Layout style={styles.container} navigation={navigation}>
      <Text>About</Text>
      <Button title={t("go-to-home")} onPress={() => navigation.navigate('Home')} />
      <Button title={t('go-back')} onPress={() => navigation.goBack()} />
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

export default withTranslation('pageAbout')(About);
