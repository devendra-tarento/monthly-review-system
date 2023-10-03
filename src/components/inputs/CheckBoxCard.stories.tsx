import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckBoxCard } from "./CheckBoxCard";

export default {
  title: "Design System/Fields",
  component: CheckBoxCard,
  argTypes: {
    isChecked: {
      control: {
        type: "boolean",
        required: true,
      },
    },
    label: {
      control: {
        type: "text",
        required: true,
      },
    },
    subLabel: {
      control: {
        type: "text",
        required: false,
      },
    },
  },
} as ComponentMeta<typeof CheckBoxCard>;

export const MainCheckBoxCard: ComponentStory<typeof CheckBoxCard> = (args) => (
  <CheckBoxCard {...args} />
);

MainCheckBoxCard.args = {
    isChecked: false,
    label: "HR",
    subLabel: "subLabel"
};
