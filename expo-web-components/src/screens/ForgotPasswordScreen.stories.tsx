import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ForgotPasswordScreen from "./ForgotPasswordScreen";

const ForgotPasswordScreenMeta: ComponentMeta<typeof ForgotPasswordScreen> = {
  title: "Screens/ForgotPassword",
  component: ForgotPasswordScreen,
  argTypes: {
  },
  args: {
  },
};

export default ForgotPasswordScreenMeta;

type Story = ComponentStory<typeof ForgotPasswordScreen>;

export const Basic: Story = (args) => <SafeAreaProvider><ForgotPasswordScreen {...args} /></SafeAreaProvider>;
Basic.args = {
};
