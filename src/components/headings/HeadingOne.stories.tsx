import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HeadingOne } from "./HeadingOne";

export default {
  title: "Design System/Headings",
  component: HeadingOne,
  argTypes: {
    title: {
      defaultValue: "Title",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof HeadingOne>;

export const MainHeading: ComponentStory<typeof HeadingOne> = (args) => (
  <HeadingOne {...args} />
);

MainHeading.args = {
  title: "List of dashboards",
};
