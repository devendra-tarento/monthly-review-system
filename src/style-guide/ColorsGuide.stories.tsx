import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ColorGuide } from "./ColorGuide";

export default {
  title: "Style Guide",
  component: ColorGuide,
} as ComponentMeta<typeof ColorGuide>;

export const Colors: ComponentStory<typeof ColorGuide> = (args) => (
  <ColorGuide {...args} />
);

Colors.args = {}