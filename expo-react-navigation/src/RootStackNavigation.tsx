import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {
  DarkTheme,
  DefaultTheme,
  InitialState,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import * as React from 'react';
import { Linking, LogBox, Platform, Text } from 'react-native';
import {
  DefaultTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import {
  type RootStackParamList,
  linkingConfig,
  PAGE_NAMES,
  PAGES,
} from './pages';
import HomePage from './pages/Home';
import NotFound from './Screens/NotFound';

if (Platform.OS !== 'web') {
  LogBox.ignoreLogs(['Require cycle:']);
}

const Stack = createStackNavigator<RootStackParamList>();

const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';
const THEME_PERSISTENCE_KEY = 'THEME_TYPE';

export default function RootStackNavigation() {
  const [theme, setTheme] = React.useState(DefaultTheme);
  const [isReady, setIsReady] = React.useState(Platform.OS === 'web');
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();

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
        } catch (e) {}

        setIsReady(true);
      }
    };
    restoreState();
  }, []);

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
        <Stack.Navigator
          screenOptions={{
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          }}
        >
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={HomePage}
          />
          <Stack.Screen
            name="NotFound"
            component={NotFound}
            options={{ title: 'Oops!' }}
          />
          {PAGE_NAMES.map((name) => (
            <Stack.Screen
              key={name}
              name={name}
              getComponent={() => PAGES[name].component}
              options={{ title: PAGES[name].title }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
