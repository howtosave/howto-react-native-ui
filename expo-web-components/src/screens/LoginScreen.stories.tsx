import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from "./LoginScreen";

const LoginScreenMeta: ComponentMeta<typeof LoginScreen> = {
  title: "Screens/Login",
  component: LoginScreen,
  argTypes: {
  },
  args: {
  },
};

export default LoginScreenMeta;

type Story = ComponentStory<typeof LoginScreen>;

export const Basic: Story = (args) => <SafeAreaProvider><LoginScreen {...args} /></SafeAreaProvider>;
Basic.args = {
};
