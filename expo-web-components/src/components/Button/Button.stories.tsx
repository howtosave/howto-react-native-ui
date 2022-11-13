import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "./Button";

const MyButtonMeta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    // onPress: { action: "pressed the button" },
  },
  args: {
    // text: "Hello world",
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof Button>;

export const Basic: MyButtonStory = (args) => <Button {...args} />;
Basic.args = {
  text: 'Hello world',
};
