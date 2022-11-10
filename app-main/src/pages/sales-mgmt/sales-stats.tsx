import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { withTranslation, WithTranslation } from 'react-i18next';

import Layout from '../../components/Layout/Layout';

const I18nName = 'pageSales';
const PageId = 'SalesStats';
type SalesStatsProps = WithTranslation<typeof I18nName> & BottomTabScreenProps<PageParamSales, typeof PageId>;

function SalesStats({ navigation, t }: SalesStatsProps) {
  return (
    <Layout style={styles.container} navigation={navigation}>
      <Text>{t('page-title-sales-stats')}</Text>
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

export default withTranslation(I18nName)(SalesStats);
