import React from 'react';
import { I18nManager, useColorScheme } from 'react-native';
import {
  DefaultTheme,
  MD3DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
// import { Updates } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PreferencesContext } from './context/preferencesContext';
import { RootNavigator } from './screens/rootNavigator';

const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light'
  );
  const [rtl] = React.useState<boolean>(I18nManager.isRTL);

  function toggleTheme() {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  const toggleRTL = React.useCallback(() => {
    I18nManager.forceRTL(!rtl);
    // Updates.reloadFromCache();
  }, [rtl]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left') as 'right' | 'left',
    }),
    [rtl, theme, toggleRTL]
  );

  return (
    <SafeAreaProvider>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider
          theme={
            theme === 'light'
              ? {
                  ...DefaultTheme,
                  colors: { ...DefaultTheme.colors, primary: '#1ba1f2' },
                }
              : {
                  ...MD3DarkTheme,
                  colors: { ...MD3DarkTheme.colors, primary: '#1ba1f2' },
                }
          }
        >
          <RootNavigator />
        </PaperProvider>
      </PreferencesContext.Provider>
    </SafeAreaProvider>
  );
};

export default Main;
