import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DashboardScreen from './DashboardScreen';

const DashboardScreenMeta: ComponentMeta<typeof DashboardScreen> = {
  title: 'Screens/Dashboard',
  component: DashboardScreen,
  argTypes: {},
  args: {},
};

export default DashboardScreenMeta;

type Story = ComponentStory<typeof DashboardScreen>;

export const Basic: Story = (args) => (
  <SafeAreaProvider>
    <DashboardScreen {...args} />
  </SafeAreaProvider>
);
Basic.args = {};
