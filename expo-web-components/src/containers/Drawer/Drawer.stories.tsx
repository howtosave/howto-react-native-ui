import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Drawer } from './Drawer';

const DrawerMeta: ComponentMeta<typeof Drawer> = {
  title: 'Containers/Drawer',
  component: Drawer,
  argTypes: {},
  args: {},
};

export default DrawerMeta;

type Story = ComponentStory<typeof Drawer>;

const items = [
  { name: 'first', icon: 'star', label: 'first' },
  { name: 'second', icon: 'star', label: 'second' },
  { name: 'third', icon: 'star', label: 'third' },
];

export const Basic: Story = (args) => <Drawer {...args} />;
Basic.args = {
  items,
  isCollapsed: false,
};
