import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { HeadphoneCarousel } from "./HeadphoneCarousel";

const HeadphoneCarouselMeta: ComponentMeta<typeof HeadphoneCarousel> = {
  title: "DeviceOnly-Containers/HeadphoneCarousel",
  component: HeadphoneCarousel,
  argTypes: {
  },
  args: {
  },
};

export default HeadphoneCarouselMeta;

type HeadphoneCarouselStory = ComponentStory<typeof HeadphoneCarousel>;

export const Basic: HeadphoneCarouselStory = (args) => <HeadphoneCarousel {...args} />;
Basic.args = {
};
