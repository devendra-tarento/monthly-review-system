import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextAreaField } from "./TextAreaField";

export default {
  title: "Design System/Fields",
  component: TextAreaField,
  argTypes: {
    showTitle: {
      control: {
        type: "boolean",
        required: false,
      },
    },
    showDescription: {
      control: {
        type: "boolean",
        required: false,
      },
    },
    title: {
      control: {
        type: "string",
        required: false,
      },
    },
    description: {
      control: "string",
      required: false,
    },
    placeholder: {
      control: {
        type: "string",
        required: false,
      },
    },
    rows: {
      control: {
        type: "number",
        required: false,
      },
    },
    descriptionPos: {
      control: {
        type: "radio",
        options: ["top", "bottom"],
      },
    },
    showOptTxt: {
      control: {
        type: "boolean",
        required: false,
      },
    },
    optionalText: {
      control: "text",
      required: false,
    },
  },
} as ComponentMeta<typeof TextAreaField>;

export const MainTextAreaField: ComponentStory<typeof TextAreaField> = (
  args
) => <TextAreaField {...args} />;

MainTextAreaField.args = {
  title: "Title",
  description:
    "This will be the visible title of the dashboard when it is rendered.",
  showTitle: true,
  showDescription: true,
  placeholder: "Type here",
  rows: 5,
};
