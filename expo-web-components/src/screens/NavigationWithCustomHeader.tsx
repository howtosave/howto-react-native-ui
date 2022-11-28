import {
  createDrawerNavigator,
  DrawerContentComponentProps,
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

const NavigationBar = ({ route, navigation, back }: NativeStackHeaderProps) => {
  console.log('>>>', route.path);
  const { name } = route;
  const _items =
    name === 'Login' || name === 'Register' || name === 'ForgotPassword'
      ? []
      : appbarItems;
  if (back) _items.push({ name: 'back', icon: 'back' });

  return <Appbar items={_items} onSelect={_onSelect} />;

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
// Main Stack
//
const MainStack = createNativeStackNavigator<MainStackParamList>();
type Props = {
  isLoggedIn: boolean;
};

const MainNavi = ({ isLoggedIn }: Props) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        header: (props) => <NavigationBar {...props} />,
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
// App Main
//
const { LightTheme } = adaptNavigationTheme({ light: DefaultTheme });

type NaviProps = {
  isLoggedIn?: boolean;
  page?: keyof MainStackParamList;
};

const NavigationWithCustomHeader = ({
  isLoggedIn = false,
  page,
}: NaviProps) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={LightTheme}>
        <MainNavi isLoggedIn={isLoggedIn} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationWithCustomHeader;
