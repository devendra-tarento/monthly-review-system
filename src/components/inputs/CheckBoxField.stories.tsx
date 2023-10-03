import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckBoxField } from "./CheckBoxField";

export default {
  title: "Design System/Fields",
  component: CheckBoxField,
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
  },
} as ComponentMeta<typeof CheckBoxField>;

export const MainCheckBoxField: ComponentStory<typeof CheckBoxField> = (
  args
) => <CheckBoxField {...args} />;

MainCheckBoxField.args = {
  isChecked: true,
  label: "HR",
  subLabel: "subLabel",
};
