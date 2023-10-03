import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonText } from "./ButtonText";

export default {
  title: "Design System/Headings",
  component: ButtonText,
  argTypes: {
    text: {
      defaultValue: "Button",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof ButtonText>;

export const MainButtonText: ComponentStory<typeof ButtonText> = (args) => (
  <ButtonText {...args} />
);

MainButtonText.args = {
  text: "List of dashboards",
};
