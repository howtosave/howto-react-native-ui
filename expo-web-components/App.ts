import registerRootComponent from 'expo/build/launch/registerRootComponent';

// import App from './src/main';
//export { default } from "./storybook";
//import { default as App } from "./storybook";
import StorybookUIRoot from './.ondevice/Storybook';
export { StorybookUIRoot as default };

// registerRootComponent(App);
registerRootComponent(StorybookUIRoot);
