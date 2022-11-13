import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { HeadphoneCarousel } from "./HeadphoneCarousel";

/**
 * See https://github.com/callstack/react-native-pager-view/tree/master/example
 * for more examples
 */

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
