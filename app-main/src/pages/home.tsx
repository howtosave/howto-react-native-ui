import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import { withTranslation, WithTranslation } from 'react-i18next';

import Layout from '../components/Layout/Layout';

type HomeProps = WithTranslation<'pageHome'> & StackScreenProps<RootStackParamList, 'Home'>;

function Home({ navigation, t }: HomeProps) {
  return (
    <Layout style={styles.container} navigation={navigation}>
      <Text>HOME</Text>

      <Button
        title={t('go-to-about')}
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

export default withTranslation('pageHome')(Home);
