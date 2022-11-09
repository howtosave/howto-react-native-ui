//
// See https://callstack.github.io/react-native-paper/theming.html
//
import { 
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default theme;
