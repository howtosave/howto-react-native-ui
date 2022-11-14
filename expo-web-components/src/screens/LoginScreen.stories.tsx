import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
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

export const Basic: Story = (args) => <LoginScreen {...args} />;
Basic.args = {
};
