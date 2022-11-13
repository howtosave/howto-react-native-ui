import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { FlexLayout } from "./FlexLayout";

const FlexLayoutMeta: ComponentMeta<typeof FlexLayout> = {
  title: "Containers/FlexLayout",
  component: FlexLayout,
  argTypes: {
  },
  args: {
  },
};

export default FlexLayoutMeta;

type FlexLayoutStory = ComponentStory<typeof FlexLayout>;

export const Basic: FlexLayoutStory = (args) => <FlexLayout {...args} />;
Basic.args = {
  alignCotent: 'flex-start',
  alignItems: 'flex-start',
  // flex: 1,
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  direction: 'ltr',
  child_alignSelf: 'auto',
};
