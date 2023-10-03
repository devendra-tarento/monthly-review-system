import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  title: "Design System/Fields",
  component: Avatar,
  argTypes: {
    initials: {
      control: { type: "text", required: true },
    },
    variant: {
      control: { type: "select", required: true, options: ["small", "large"] },
    },
    bgColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof Avatar>;

export const AvatarField: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

AvatarField.args = {
  initials: "MP",
  variant: "small",
};
