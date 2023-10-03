import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TypographyGuide } from "./TypographyGuide";

export default {
  title: "Style Guide",
  component: TypographyGuide,
} as ComponentMeta<typeof TypographyGuide>;

export const Typography: ComponentStory<typeof TypographyGuide> = (args) => (
  <TypographyGuide {...args} />
);

Typography.args = {};
