import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonSmallSecondary } from "./ButtonSmallSecondary";

export default {
  title: "Design System/Buttons",
  component: ButtonSmallSecondary,
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
    isDisabled: {
      defaultValue: false,
      control: { type: "boolean", required: false },
    },
  },
} as ComponentMeta<typeof ButtonSmallSecondary>;

export const SmallerButtonPrimaryTwo: ComponentStory<typeof ButtonSmallSecondary> = (
  args
) => <ButtonSmallSecondary {...args} />;

SmallerButtonPrimaryTwo.args = {
  btnTxt: "Save",
  showIcon: true,
  iconPosition: "left",
  icon: "done"
};
