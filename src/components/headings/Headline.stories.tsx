import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Headline } from "./Headline";

export default {
  title: "Design System/Headings",
  component: Headline,
  argTypes: {
    title: {
      defaultValue: "Title",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof Headline>;

export const MainHeadline: ComponentStory<typeof Headline> = (args) => (
  <Headline {...args} />
);

MainHeadline.args = {
  title: "List of dashboards",
};
