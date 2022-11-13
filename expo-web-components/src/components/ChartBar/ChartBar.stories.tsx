import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ChartBar } from "./ChartBar";

const ChartBarMeta: ComponentMeta<typeof ChartBar> = {
  title: "Chart/Bar",
  component: ChartBar,
  argTypes: {
  },
  args: {
  },
};

export default ChartBarMeta;

type ChartBarStory = ComponentStory<typeof ChartBar>;

export const Basic: ChartBarStory = (args) => <ChartBar {...args} />;
Basic.args = {
  data: [[
    { x: 1, y: 1, label: 1 },
    { x: 2, y: 2, label: 2 },
    { x: 3, y: 5, label: 5 },
  ]],
  style: { data: { fill: "#c43a31" } }
};

export const Group: ChartBarStory = (args) => <ChartBar {...args} />;
Group.args = {
  data: [
    [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 5 },
    ],
    [
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 7 },
    ],
    [
      { x: 1, y: 3 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
    ],
  ],
};
