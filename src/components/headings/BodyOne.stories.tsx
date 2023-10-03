import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BodyOne } from "./BodyOne";

export default {
  title: "Design System/Headings",
  component: BodyOne,
  argTypes: {
    content: {
      defaultValue: "Content",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof BodyOne>;

export const MainBodyOne: ComponentStory<typeof BodyOne> = (args) => (
  <BodyOne {...args} />
);

MainBodyOne.args = {
  content: "List of dashboards",
};
