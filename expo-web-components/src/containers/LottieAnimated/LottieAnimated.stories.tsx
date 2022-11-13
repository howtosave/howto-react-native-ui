import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { LottieAnimated } from "./LottieAnimated";

type LottieAnimatedStory = ComponentStory<typeof LottieAnimated>;

const LottieAnimatedMeta: ComponentMeta<typeof LottieAnimated> = {
  title: "DeviceOnly-Containers/LottieAnimated",
  component: LottieAnimated,
  argTypes: {
  },
  args: {
  },
};

export default LottieAnimatedMeta;


export const Basic: LottieAnimatedStory = (args) => <LottieAnimated {...args} />;
Basic.args = {
};
