import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { ChartLine } from './ChartLine';

const ChartLineMeta: ComponentMeta<typeof ChartLine> = {
  title: 'Chart/Line',
  component: ChartLine,
  argTypes: {},
  args: {},
};

export default ChartLineMeta;

type ChartLineStory = ComponentStory<typeof ChartLine>;

export const Basic: ChartLineStory = (args) => <ChartLine {...args} />;
Basic.args = {
  data: [
    [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 5 },
    ],
  ],
  style: { data: { strokeWidth: 4 } },
};

export const Stack: ChartLineStory = (args) => <ChartLine {...args} />;
Stack.args = {
  data: [
    [
      { x: 'a', y: 2 },
      { x: 'b', y: 3 },
      { x: 'c', y: 5 },
      { x: 'd', y: 4 },
      { x: 'e', y: 7 },
    ],
    [
      { x: 'a', y: 1 },
      { x: 'b', y: 4 },
      { x: 'c', y: 5 },
      { x: 'd', y: 7 },
      { x: 'e', y: 5 },
    ],
    [
      { x: 'a', y: 3 },
      { x: 'b', y: 2 },
      { x: 'c', y: 6 },
      { x: 'd', y: 2 },
      { x: 'e', y: 6 },
    ],
  ],
};
