/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

// temporary fix for https://github.com/storybookjs/react-native/issues/327 whilst the issue is investigated
try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require("../src/components/Button/Button.stories.tsx"),
    require("../src/components/ChartArea/ChartArea.stories.tsx"),
    require("../src/components/ChartBar/ChartBar.stories.tsx"),
    require("../src/components/ChartLine/ChartLine.stories.tsx"),
    require("../src/components/ChartScatter/ChartScatter.stories.tsx"),
    require("../src/components/LikeCount/LikeCount.stories.tsx"),
    require("../src/components/Picker/Picker.stories.tsx"),
    require("../src/components/TextNumber/TextNumber.stories.tsx"),
    require("../src/containers/Appbar/Appbar.stories.tsx"),
    require("../src/containers/Drawer/Drawer.stories.tsx"),
    require("../src/containers/FlexLayout/FlexLayout.stories.tsx"),
    require("../src/containers/HeadphoneCarousel/HeadphoneCarousel.stories.tsx"),
    require("../src/containers/LottieAnimated/LottieAnimated.stories.tsx"),
    require("../src/containers/NestPager/NestPager.stories.tsx"),
    require("../src/screens/DashboardScreen.stories.tsx"),
    require("../src/screens/ForgotPasswordScreen.stories.tsx"),
    require("../src/screens/LandingScreen.stories.tsx"),
    require("../src/screens/LoginScreen.stories.tsx"),
    require("../src/screens/NavigationTest.stories.tsx"),
    require("../src/screens/NavigationWithCustomHeader.stories.tsx"),
    require("../src/screens/NavigationWithDrawer.stories.tsx"),
    require("../src/screens/RegisterScreen.stories.tsx"),
  ];
};

configure(getStories, module, false);
