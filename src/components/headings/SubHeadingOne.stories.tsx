import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SubHeadingOne } from "./SubHeadingOne";

export default {
  title: "Design System/Headings",
  component: SubHeadingOne,
  argTypes: {
    title: {
      defaultValue: "Title",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof SubHeadingOne>;

export const MainSubHeadingOne: ComponentStory<typeof SubHeadingOne> = (
  args
) => <SubHeadingOne {...args} />;

MainSubHeadingOne.args = {
  title: "List of dashboards",
};
