import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerHeaderProps,
} from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, { memo } from 'react';
import {
  adaptNavigationTheme,
  Provider as PageProvider,
  Text,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Appbar, ItemType } from '../containers/Appbar/Appbar';
import { Drawer } from '../containers/Drawer/Drawer';
import DashboardScreen from './DashboardScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
//
// screens
//
import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
const AboutScreen = () => (
  <React.Fragment>
    <Text>About</Text>
  </React.Fragment>
);

//
// custom navi bar
//
const appbarItems: ItemType[] = [
  { name: 'archive', icon: 'archive', label: 'archive' },
  { name: 'email', icon: 'email', label: 'email' },
  { name: 'more', icon: 'more', label: 'more' },
];

const DrawerBar = ({ route, navigation }: DrawerHeaderProps) => {
  console.log('>>>', route.path);
  const { name } = route;
  const _items =
    name === 'Login' || name === 'Register' || name === 'ForgotPassword'
      ? []
      : appbarItems;

  return <Appbar items={_items} onSelect={_onSelect} />;

  function _onSelect(selected: ItemType) {
    switch (selected.name) {
      case 'back':
        navigation.goBack();
        break;
      case 'more':
        navigation.openDrawer();
        break;
    }
  }
};

//
// custom drawer
//
const drawerItems = [
  { name: 'first', icon: 'star', label: 'first' },
  { name: 'second', icon: 'star', label: 'second' },
  { name: 'third', icon: 'star', label: 'third' },
];

const DrawerContent = (props: DrawerContentComponentProps) => {
  return <Drawer items={drawerItems} />;
};

//
// Root Stack
//
const MainStack = createNativeStackNavigator<MainStackParamList>();
type MainNaviProps = NativeStackScreenProps<DrawerStackParamList, 'MainNavi'>;

const MainNavi = ({ route, navigation }: MainNaviProps) => {
  const { isLoggedIn } = route.params;
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedIn ? (
        <MainStack.Group>
          <MainStack.Screen name="Dashboard" component={DashboardScreen} />
          <MainStack.Screen name="About" component={AboutScreen} />
        </MainStack.Group>
      ) : (
        <MainStack.Group>
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Register" component={RegisterScreen} />
          <MainStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </MainStack.Group>
      )}

      {/* Common Screens */}
      <MainStack.Screen name="Landing" component={LandingScreen} />
    </MainStack.Navigator>
  );
};

//
// Drawer Stack
//
const DrawerStack = createDrawerNavigator<DrawerStackParamList>();
const DrawerNavi = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        header: (props) => <DrawerBar {...props} />,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <DrawerStack.Screen
        name="MainNavi"
        component={MainNavi}
        initialParams={{ isLoggedIn }}
        options={{ drawerLabel: 'DASHBOARD' }}
      />
      <DrawerStack.Screen
        name="About"
        component={AboutScreen}
        options={{ drawerLabel: 'ABOUT' }}
      />
    </DrawerStack.Navigator>
  );
};

//
// App Main
//
const { LightTheme } = adaptNavigationTheme({ light: DefaultTheme });

type Props = {
  isLoggedIn?: boolean;
  page?: keyof MainStackParamList;
};

const NavigationWithDrawer = ({ isLoggedIn = false, page }: Props) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={LightTheme}>
        <DrawerNavi isLoggedIn={isLoggedIn} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationWithDrawer;
