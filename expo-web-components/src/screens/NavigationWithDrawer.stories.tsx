import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import NavigationWithDrawer from './NavigationWithDrawer';

const NavigationWithDrawerMeta: ComponentMeta<typeof NavigationWithDrawer> = {
  title: 'Navi/NavigationWithDrawer',
  component: NavigationWithDrawer,
  argTypes: {},
  args: {},
};

export default NavigationWithDrawerMeta;

type Story = ComponentStory<typeof NavigationWithDrawer>;

export const Basic: Story = (args) => <NavigationWithDrawer {...args} />;
Basic.args = {
  isLoggedIn: true,
};
