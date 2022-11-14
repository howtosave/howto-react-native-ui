import React, { memo } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PageProvider, adaptNavigationTheme } from 'react-native-paper';

//
// screens
//
import LandingScreen from './LandingScreen';
import DashboardScreen from './DashboardScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';

import { Appbar, ItemType } from '../containers/Appbar/Appbar';
import { Drawer } from '../containers/Drawer/Drawer';

import { Text } from 'react-native-paper';
const AboutScreen = () => <React.Fragment><Text>About</Text></React.Fragment>;

//
// custom navi bar
//
const appbarItems: ItemType[] = [
  { name: 'archive', icon: 'archive', label: 'archive'},
  { name: 'email', icon: 'email', label: 'email'},
  { name: 'more', icon: 'more', label: 'more'},
];

const NavigationBar = ({ route, navigation, back }: NativeStackHeaderProps) => {
  console.log('>>>', route.path);
  const { name } = route;
  const _items = name === 'Login' || name === 'Register' || name === 'ForgotPassword'
    ? [] : appbarItems;
  if (back) _items.push({ name: 'back', icon: 'back' });

  return (
    <Appbar items={_items} onSelect={_onSelect}/>
  );

  function _onSelect(selected: ItemType) {
    switch (selected.name) {
      case 'back': 
        navigation.goBack();
        break;
      case 'more':
        // show drawer
        break;
    }
  }
};

//
// custom drawer
//
const drawerItems = [
  {name: 'first', icon: 'star', label: 'first'},
  {name: 'second', icon: 'star', label: 'second'},
  {name: 'third', icon: 'star', label: 'third'},
];

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <Drawer items={drawerItems}/>
  );
};


//
// Root Stack
//
const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavi = ({ isLoggedIn }: {isLoggedIn: boolean}) => {
  return (
    <RootStack.Navigator
      screenOptions={{
        header: (props) => <NavigationBar {...props} />,
      }}
    >

      {isLoggedIn ? (
        <RootStack.Group>
          <RootStack.Screen name="Login" component={LoginScreen}/>
          <RootStack.Screen name="Register" component={RegisterScreen}/>
          <RootStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </RootStack.Group>
      ):(
        <RootStack.Group>
          <RootStack.Screen name="Dashboard" component={DashboardScreen}/>
          <RootStack.Screen name="About" component={AboutScreen} />
        </RootStack.Group>
      )}

      {/* Common Screens */}
      <RootStack.Screen name="Landing" component={LandingScreen}/>
    </RootStack.Navigator>

  );
};

//
// Drawer Stack
//
const DrawerStack = createDrawerNavigator();
const DrawerNavi = (props: {isLoggedIn: boolean}) => {
  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <DrawerStack.Screen name="RootNavi" component={RootNavi} options={{ drawerLabel: 'Dashboard', params: {...props}, }} />
      <DrawerStack.Screen name="About" component={AboutScreen} />
    </DrawerStack.Navigator>
  );
}

//
// App Main
//
const { LightTheme } = adaptNavigationTheme({ light: DefaultTheme });

type Props = {
  isLoggedIn?: boolean;
  page?: keyof RootStackParamList;
};

const AppMain = ({ isLoggedIn = false, page }: Props) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={LightTheme}>

        <DrawerNavi isLoggedIn={isLoggedIn} />

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppMain;
