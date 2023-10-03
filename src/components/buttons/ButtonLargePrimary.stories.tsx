import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonLargePrimary } from "./ButtonLargePrimary";

export default {
  title: "Design System/Buttons",
  component: ButtonLargePrimary,
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
} as ComponentMeta<typeof ButtonLargePrimary>;

export const LargerButtonPrimary: ComponentStory<typeof ButtonLargePrimary> = (
  args
) => <ButtonLargePrimary {...args} />;

LargerButtonPrimary.args = {
  btnTxt: "Login",
};
