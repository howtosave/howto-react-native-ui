import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import AppMain from "./AppMain";

const AppMainMeta: ComponentMeta<typeof AppMain> = {
  title: "Screens/AppMain",
  component: AppMain,
  argTypes: {
  },
  args: {
  },
};

export default AppMainMeta;

type Story = ComponentStory<typeof AppMain>;

export const Basic: Story = (args) => <AppMain {...args} />;
Basic.args = {
  isLoggedIn: true,
};
