import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Label } from "./Label";

export default {
  title: "Design System/Headings",
  component: Label,
  argTypes: {
    text: {
      defaultValue: "Label",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof Label>;

export const MainLabel: ComponentStory<typeof Label> = (args) => (
  <Label {...args} />
);

MainLabel.args = {
  text: "List of dashboards",
};
