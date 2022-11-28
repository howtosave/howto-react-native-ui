import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { ChartScatter } from './ChartScatter';

const ChartScatterMeta: ComponentMeta<typeof ChartScatter> = {
  title: 'Chart/Scatter',
  component: ChartScatter,
  argTypes: {},
  args: {},
};

export default ChartScatterMeta;

type ChartScatterStory = ComponentStory<typeof ChartScatter>;

export const Basic: ChartScatterStory = (args) => <ChartScatter {...args} />;
Basic.args = {
  data: [
    [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 4 },
      { x: 4, y: 2 },
      { x: 5, y: 1 },
      { x: 6, y: 3 },
    ],
  ],
};
