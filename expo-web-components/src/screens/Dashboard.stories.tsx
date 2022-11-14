import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import Dashboard from "./Dashboard";

const DashboardMeta: ComponentMeta<typeof Dashboard> = {
  title: "Screens/Dashboard",
  component: Dashboard,
  argTypes: {
  },
  args: {
  },
};

export default DashboardMeta;

type Story = ComponentStory<typeof Dashboard>;

export const Basic: Story = (args) => <Dashboard {...args} />;
Basic.args = {
};
