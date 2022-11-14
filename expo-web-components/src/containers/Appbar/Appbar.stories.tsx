import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appbar as Appbar } from "./Appbar";

const AppbarMeta: ComponentMeta<typeof Appbar> = {
  title: "Containers/Appbar",
  component: Appbar,
  argTypes: {
  },
  args: {
  },
};

export default AppbarMeta;

type Story = ComponentStory<typeof Appbar>;

export const Basic: Story = (args) => <SafeAreaProvider><Appbar {...args} /></SafeAreaProvider>;
Basic.args = {
  items: [
    { name: 'archive', icon: 'archive', label: 'archive', display: 'show'},
    { name: 'email', icon: 'email', label: 'email', display: 'show'},
    { name: 'more', icon: 'more', label: 'more', display: 'show'},
    { name: 'back', icon: 'back'},
    { name: 'fab', icon: 'plus'},
  ],
  topTitle: 'Title',
};
