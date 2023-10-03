import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "./Title";

export default {
  title: "Design System/Headings",
  component: Title,
  argTypes: {
    title: {
      defaultValue: "Title",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof Title>;

export const MainTitle: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
);

MainTitle.args = {
  title: "List of dashboards",
};
