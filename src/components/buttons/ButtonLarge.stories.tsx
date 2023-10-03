import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonLarge } from "./ButtonLarge";

export default {
  title: "Design System/Buttons",
  component: ButtonLarge,
  argTypes: {
    isLink: {
      defaultValue: false,
      control: { type: "boolean", required: false },
    },
    showIcon: {
      defaultValue: false,
      control: { type: "boolean", required: false },
      description: "Kindly select icon position as well",
    },
    icon: {
      defaultValue: "add",
      control: { type: "text", required: false },
      description: "Set string which is available in material icons.",
    },
    iconPosition: {
      control: {
        type: "select",
        required: false,
        options: ["left", "right"],
      },
    },
    btnTxt: {
      control: {
        type: "string",
        required: true,
      },
    },
  },
} as ComponentMeta<typeof ButtonLarge>;

export const LargerButton: ComponentStory<typeof ButtonLarge> = (args) => (
  <ButtonLarge {...args} />
);

LargerButton.args = {
  btnTxt: "Button",
};
