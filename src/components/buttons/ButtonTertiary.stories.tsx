import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonTertiary } from "./ButtonTertiary";

export default {
  title: "Design System/Buttons",
  component: ButtonTertiary,
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
} as ComponentMeta<typeof ButtonTertiary>;

export const TertiaryButton: ComponentStory<typeof ButtonTertiary> = (args) => (
  <ButtonTertiary {...args} />
);

TertiaryButton.args = {
  btnTxt: "Super Admin",
};
