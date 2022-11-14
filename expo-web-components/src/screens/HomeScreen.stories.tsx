import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import HomeScreen from "./HomeScreen";

const HomeScreenMeta: ComponentMeta<typeof HomeScreen> = {
  title: "Screens/Home",
  component: HomeScreen,
  argTypes: {
  },
  args: {
  },
};

export default HomeScreenMeta;

type Story = ComponentStory<typeof HomeScreen>;

export const Basic: Story = (args) => <HomeScreen {...args} />;
Basic.args = {
};
