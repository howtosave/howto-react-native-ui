// for using @react-navigation/stack
// See https://reactnavigation.org/docs/stack-navigator
import 'react-native-gesture-handler';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/**
 * 
*/
const SUPPRESSED_ERRORS = ['Warning: ReactDOM.render is no longer supported'];
const consoleError = console.error;
console.error = function filterWarnings(msg, ...args) {
  if (!SUPPRESSED_ERRORS.some((entry) => msg.includes(entry))) {
    consoleError(msg, ...args);
  }
};
