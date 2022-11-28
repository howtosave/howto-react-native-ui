import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { TextNumber } from './TextNumber';

const TextNumberMeta: ComponentMeta<typeof TextNumber> = {
  title: 'TextNumber',
  component: TextNumber,
  argTypes: {},
  args: {},
};

export default TextNumberMeta;

type TextNumberStory = ComponentStory<typeof TextNumber>;

export const Basic: TextNumberStory = (args) => <TextNumber {...args} />;
Basic.args = {
  start: 100,
  value: 1000,
};
