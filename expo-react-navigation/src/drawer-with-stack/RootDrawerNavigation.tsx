import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  DarkTheme,
  DefaultTheme,
  DrawerActions,
  InitialState,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import * as React from 'react';
import {
  type ScaledSize,
  Dimensions,
  Linking,
  LogBox,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {
  Appbar,
  Button,
  DefaultTheme as PaperLightTheme,
  Divider,
  MD3DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
  useTheme,
} from 'react-native-paper';

import NotFound from '../Screens/NotFound';
import HomePage from './Home';
import LandingPage from './Landing';
import NaviHeaderLeftButton from './NaviHeaderLeftButton';
import {
  type RootDrawerParamList,
  linkingConfig,
  PAGE_NAMES,
  PAGES,
} from './pages';

if (Platform.OS !== 'web') {
  LogBox.ignoreLogs(['Require cycle:']);
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';
const THEME_PERSISTENCE_KEY = 'THEME_TYPE';

export default function RootDrawerNavigation() {
  const [theme, setTheme] = React.useState(DefaultTheme);
  const [isReady, setIsReady] = React.useState(Platform.OS === 'web');
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();
  const [dimensions, setDimensions] = React.useState(Dimensions.get('window'));

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();
        if (Platform.OS !== 'web' || initialUrl === null) {
          const savedState = await AsyncStorage?.getItem(
            NAVIGATION_PERSISTENCE_KEY
          );

          const state = savedState ? JSON.parse(savedState) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        try {
          const themeName = await AsyncStorage?.getItem(THEME_PERSISTENCE_KEY);
          setTheme(themeName === 'dark' ? DarkTheme : DefaultTheme);
        } catch (e) {
          /* ignore */
        }

        setIsReady(true);
      }
    };
    restoreState();
  }, []);

  React.useEffect(() => {
    const onDimensionsChange = ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    };

    const dimSub = Dimensions.addEventListener('change', onDimensionsChange);

    return () => dimSub.remove();
  }, []);

  const isLargeScreen = dimensions.width >= 1024;
  const paperTheme = React.useMemo(() => {
    const t = theme.dark ? PaperDarkTheme : PaperLightTheme;
    return {
      ...t,
      colors: {
        ...t.colors,
        ...theme.colors,
        surface: theme.colors.card,
        accent: theme.dark ? 'rgb(255, 55, 95)' : 'rgb(255, 45, 85)',
      },
    };
  }, [theme.colors, theme.dark]);

  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  useFlipper(navigationRef);

  if (!isReady) {
    return null;
  }

  //
  // drawer menu content
  function HomeDrawerContent({ navigation }: DrawerContentComponentProps) {
    const { colors } = useTheme();

    function closeDrawer() {
      navigation.dispatch(DrawerActions.closeDrawer());
      // navigation.closeDrawer();
    }

    return (
      <>
        <Appbar.Header
          style={{ backgroundColor: colors.surface, elevation: 1 }}
        >
          <Appbar.Action icon="account" style={{}} />
          <Appbar.Content title="user name" />
          {!isLargeScreen && (
            <Appbar.Action icon="close" onPress={() => closeDrawer()} />
          )}
        </Appbar.Header>

        <ScrollView style={{ backgroundColor: theme.colors.background }}>
          <SafeAreaView>
            <Button
              onPress={() => {
                closeDrawer();
                navigation.navigate('Settings');
              }}
              style={{ margin: 8 }}
            >
              Settings
            </Button>
            <Divider />
            <Button
              onPress={() => {
                closeDrawer();
                navigation.navigate('Tabbed');
              }}
              style={{ margin: 8 }}
            >
              Tabbed
            </Button>
            <Divider />
            <Button
              onPress={() => {
                closeDrawer();
                navigation.navigate('Stacked');
              }}
              style={{ margin: 8 }}
            >
              Stacked
            </Button>
            <Divider />
          </SafeAreaView>
        </ScrollView>
        {/* <DrawerContent {...props} /> */}
      </>
    );
  }

  function onSettingsIconPress() {}

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer
        ref={navigationRef}
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage?.setItem(
            NAVIGATION_PERSISTENCE_KEY,
            JSON.stringify(state)
          )
        }
        theme={theme}
        linking={linkingConfig}
        fallback={<Text>Loading…</Text>}
        documentTitle={{
          formatter: (options, route) =>
            `${options?.title ?? route?.name} - React Navigation Example`,
        }}
      >
        <Drawer.Navigator
          drawerContent={(props) => <HomeDrawerContent {...props} />}
          screenOptions={{
            drawerType: isLargeScreen ? 'permanent' : undefined,
            headerLeft: (props) => (
              <NaviHeaderLeftButton
                icon="menu"
                action="toggle-drawer"
                {...props}
              />
            ),
            headerStyle: {
              height: 64,
            },
          }}
          initialRouteName="Landing"
        >
          <Drawer.Screen
            name="Home"
            options={{
              headerRight: ({ tintColor }) => (
                <Appbar.Action
                  icon="cellphone-settings"
                  onPress={onSettingsIconPress}
                  color={tintColor}
                />
              ),
            }}
            component={HomePage}
          />
          <Drawer.Screen
            name="Landing"
            component={LandingPage}
            options={
              {
                // headerShown: false,
              }
            }
          />
          <Drawer.Screen
            name="NotFound"
            component={NotFound}
            options={{ title: 'Oops!' }}
          />
          {PAGE_NAMES.map((name) => (
            <Drawer.Screen
              key={name}
              name={name}
              getComponent={() => PAGES[name].component}
              options={{ title: PAGES[name].title }}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
