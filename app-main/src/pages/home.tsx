import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Text, Button, useTheme, Surface, TouchableRipple } from 'react-native-paper';

import Layout from '../components/Layout/Layout';
import _theme from '../theme';
const storeIcon = require('../../assets/favicon.png');

const I18nName = 'pageHome';
const PageId = 'Home';
type HomeProps = WithTranslation<typeof I18nName> & NativeStackScreenProps<PageParamRootStack, typeof PageId>;

const menuItems = [
  {
    icon: 'store', labelId: 'go-to-store-tab', pageId: 'SalesTab', _icon: storeIcon,
  },
  {
    icon: 'human-dolly', labelId: 'go-to-stock-tab', pageId: 'SalesTab', _icon: storeIcon,
  },
  {
    icon: 'cash-multiple', labelId: 'go-to-sales-tab', pageId: 'SalesTab', _icon: storeIcon,
  },
  {
    icon: 'table-settings', labelId: 'go-to-settings', pageId: 'SalesTab', _icon: storeIcon,
  },
]

/* <Button style={styles.flexWrapItem} labelStyle={styles.itemText} key={item.labelId}
icon={item.icon} mode="contained" buttonColor={theme.colors.primary}
onPress={() => navigation.navigate('SalesTab')}>
</Button> */

function Home({ navigation, t }: HomeProps) {
  const theme = useTheme();

  return (
    <Layout style={styles.container} navigation={navigation}>
      <Text style={styles.welcomeMessage} variant="displayMedium">
        {t('welcome-message')}
      </Text>

      <View style={styles.flexWrapContainer}>
        {(menuItems).map((item) => (
          <Surface style={styles.flexWrapItem} key={item.labelId}>
            <TouchableRipple style={styles.flexWrapInnerItem}
              rippleColor="rgba(0, 0, 0, .32)"
              onPress={() => navigation.navigate(item.pageId as keyof PageParamRootStack)}
            >
              <React.Fragment>
                <Image style={styles.itemIcon} source={item._icon}/>
                <Text style={styles.itemText}>{t(item.labelId)}</Text>
              </React.Fragment>
            </TouchableRipple>
          </Surface>
        ))}
      </View>

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
  welcomeMessage: {
    paddingBottom: 20,
  },
  flexWrapContainer: {
    marginHorizontal: "auto",
    width: 400,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  flexWrapItem: {
    flex: 1,
    minWidth: 150,
    maxWidth: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: _theme.colors.primary,
    padding: 10,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  flexWrapInnerItem: {
    flex: 1,
    minWidth: 150,
    maxWidth: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 20,
    //flexWrap: "wrap",
  },
  itemIcon: {
    width: 48,
    height: 48,
    // borderWidth: 1.5,
    // borderColor: "#000"
  },

  // menuContainer: {
  //   flex: 2,
  //   width: 400,
  //   marginHorizontal: "auto",
  // },
  // menuItem: {
  //   flex: 1,
  //   maxWidth: "50%", // 100% devided by the number of rows you want
  //   alignItems: "center",
    
  //   // my visual styles; not important for the grid
  //   padding: 10,
  //   borderWidth: 1.5,
  //   borderColor: "#fff"
  // },
  // gridContainer: {
  //   flex: 2,
  //   width: 400,
  //   marginHorizontal: "auto",
  //   backgroundColor: "green",
  // },
  // gridRow: {
  //   flexDirection: 'row',
  // },
  // gridItem: {
  //   flex: 1,
  // }
});

export default withTranslation(I18nName)(Home);



/**
 * 
 * 


      {/* Grid with FlatList /}
      <FlatList style={styles.menuContainer}
        numColumns={2}
        data={menuItems} 
        renderItem={({ item }) => (
          <Button style={styles.menuItem}
            icon={item.icon} mode="contained" buttonColor={theme.colors.primary}
            onPress={() => navigation.navigate('SalesTab')}>
            {t(item.labelId)}
          </Button>
        )}
        keyExtractor={(item) => item.labelId}>

      </FlatList>

      {/* Grid with FLEX /}
      <View style={styles.gridContainer}>

        <View style={styles.gridRow}>
          <Button style={styles.gridItem}
            icon="store" mode="contained" buttonColor={theme.colors.primary}
            onPress={() => navigation.navigate('SalesTab')}>
            {t('go-to-store-tab')}
          </Button>

          <Button style={styles.gridItem}
            icon="shoppingcart" mode="contained" buttonColor={theme.colors.primary}
            onPress={() => navigation.navigate('SalesTab')}>
            {t('go-to-stock-tab')}
          </Button>
        </View>

        <View style={styles.gridRow}>
          <Button style={styles.gridItem}
            icon="money" mode="contained" buttonColor={theme.colors.primary}
            onPress={() => navigation.navigate('SalesTab')}>
            {t('go-to-sales-tab')}
          </Button>

          <Button style={styles.gridItem}
            icon="settings" mode="contained" buttonColor={theme.colors.primary}
            onPress={() => navigation.navigate('About')}>
            {t('go-to-settings')}
          </Button>
        </View>

      </View>

 */