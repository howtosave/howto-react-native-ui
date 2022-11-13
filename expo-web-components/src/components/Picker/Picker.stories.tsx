import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Picker } from "./Picker";

const PickerMeta: ComponentMeta<typeof Picker> = {
  title: "Picker",
  component: Picker,
  argTypes: {
  },
  args: {
  },
};

export default PickerMeta;

type StoryProp = ComponentStory<typeof Picker>;
export const Basic: StoryProp = (args) => <Picker {...args} />;
Basic.args = {
  items: [{ value: 'a', label: 'a' }, { value: 'b', label: 'b' }, { value: 'c', label: 'c' }],
  selected: { value: 'a' },
  isDropdown: false,
};
