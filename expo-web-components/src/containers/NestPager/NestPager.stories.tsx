import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { NestPager } from './NestPager';

const NestPagerMeta: ComponentMeta<typeof NestPager> = {
  title: 'DeviceOnly-Containers/NestPager',
  component: NestPager,
  argTypes: {},
  args: {},
};

export default NestPagerMeta;

type NestPagerStory = ComponentStory<typeof NestPager>;

export const Basic: NestPagerStory = (args) => <NestPager {...args} />;
Basic.args = {
  text: 'Hello world',
};
