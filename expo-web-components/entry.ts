import registerRootComponent from 'expo/build/launch/registerRootComponent';
// import App from './src/main';
//export { default } from "./storybook";
//import { default as App } from "./storybook";

import StorybookUIRoot from "./.ondevice/Storybook";
export { StorybookUIRoot as default };

// registerRootComponent(App);
registerRootComponent(StorybookUIRoot);

/**
 * 
 */
const consoleWarn = console.warn;
const SUPPRESSED_WARNINGS = ['ReactDOM.render is no longer supported'];

console.warn = function filterWarnings(msg, ...args) {
  if (!SUPPRESSED_WARNINGS.some((entry) => msg.includes(entry))) {
    consoleWarn(msg, ...args);
  }
};
 