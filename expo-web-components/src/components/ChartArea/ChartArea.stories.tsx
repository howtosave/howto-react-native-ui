import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { ChartArea } from "./ChartArea";

const ChartAreaMeta: ComponentMeta<typeof ChartArea> = {
  title: "Chart/Area",
  component: ChartArea,
  argTypes: {
  },
  args: {
  },
};

export default ChartAreaMeta;

type ChartAreaStory = ComponentStory<typeof ChartArea>;

export const Basic: ChartAreaStory = (args) => <ChartArea {...args} />;
Basic.args = {
  data: [
    [
      { x: "a", y: 2 },
      { x: "b", y: 3 },
      { x: "c", y: 5 },
      { x: "d", y: 4 },
      { x: "e", y: 7 },
    ],
  ],
};

export const Stacked: ChartAreaStory = (args) => <ChartArea {...args} />;
Stacked.args = {
  data: [
    [
      { x: "a", y: 2 },
      { x: "b", y: 3 },
      { x: "c", y: 5 },
      { x: "d", y: 4 },
      { x: "e", y: 7 },
    ],
    [
      { x: "a", y: 1 },
      { x: "b", y: 4 },
      { x: "c", y: 5 },
      { x: "d", y: 7 },
      { x: "e", y: 5 },
    ],
    [
      { x: "a", y: 3 },
      { x: "b", y: 2 },
      { x: "c", y: 6 },
      { x: "d", y: 2 },
      { x: "e", y: 6 },
    ],    
  ],
  title: 'Stacked Area',
  legend: [
    { name: 'first' },
    { name: 'second' },
    { name: 'third' },
  ],
  legendPos: {
    x: 60,
    y: 0,
  },
}
