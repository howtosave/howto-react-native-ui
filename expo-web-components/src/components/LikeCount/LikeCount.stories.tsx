import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { LikeCount } from './LikeCount';

type LikeCountStory = ComponentStory<typeof LikeCount>;

const LikeCountMeta: ComponentMeta<typeof LikeCount> = {
  title: 'LikeCount',
  component: LikeCount,
  argTypes: {},
  args: {},
};

export default LikeCountMeta;

export const Basic: LikeCountStory = (args) => <LikeCount {...args} />;
Basic.args = {};
