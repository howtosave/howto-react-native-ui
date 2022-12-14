import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import NavigationWithCustomHeader from './NavigationWithCustomHeader';

const NavigationWithCustomHeaderMeta: ComponentMeta<
  typeof NavigationWithCustomHeader
> = {
  title: 'Navi/NavigationWithCustomHeader',
  component: NavigationWithCustomHeader,
  argTypes: {},
  args: {},
};

export default NavigationWithCustomHeaderMeta;

type Story = ComponentStory<typeof NavigationWithCustomHeader>;

export const Basic: Story = (args) => <NavigationWithCustomHeader {...args} />;
Basic.args = {
  isLoggedIn: true,
};
