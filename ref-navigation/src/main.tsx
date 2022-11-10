import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  MD3DarkTheme,
} from 'react-native-paper';
import { I18nManager, useColorScheme } from 'react-native';
// import { Updates } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './screens/rootNavigator';
import { PreferencesContext } from './context/preferencesContext';

const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light'
  );
  const [rtl] = React.useState<boolean>(I18nManager.isRTL);

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
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
