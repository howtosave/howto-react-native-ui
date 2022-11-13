import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "./Button";

type ButtonStory = ComponentStory<typeof Button>;

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    // onPress: { action: "pressed the button" },
  },
  args: {
    // text: "Hello world",
  },
};

export default ButtonMeta;


export const Basic: ButtonStory = (args) => <Button {...args} />;
Basic.args = {
  text: 'Hello world',
};
