import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ChartGroupBar } from "./ChartGroupBar";

const ChartBarMeta: ComponentMeta<typeof ChartGroupBar> = {
  title: "Chart/GroupBar",
  component: ChartGroupBar,
  argTypes: {
  },
  args: {
  },
};

export default ChartBarMeta;

type ChartBarStory = ComponentStory<typeof ChartGroupBar>;

export const Basic: ChartBarStory = (args) => <ChartGroupBar {...args} />;
