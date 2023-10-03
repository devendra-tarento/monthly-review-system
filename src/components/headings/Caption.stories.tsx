import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Caption } from "./Caption";

export default {
  title: "Design System/Headings",
  component: Caption,
  argTypes: {
    text: {
      defaultValue: "Caption",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof Caption>;

export const MainCaption: ComponentStory<typeof Caption> = (args) => (
  <Caption {...args} />
);

MainCaption.args = {
  text: "List of dashboards",
};
