import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputField } from "./InputField";

export default {
  title: "Design System/Fields",
  component: InputField,
  argTypes: {
    inputType: {
      control: "select",
      options: [
        "text",
        "number",
        "email",
        "date",
        "tel",
        "color",
        "month",
        "search",
        "url",
        "week",
        "datetime-local",
      ],
      required: true,
    },
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
    showOptTxt: {
      control: {
        type: "boolean",
        required: false,
      },
    },
    title: {
      control: {
        type: "text",
        required: false,
      },
    },
    description: {
      control: "text",
      required: false,
    },
    optionalText: {
      control: "text",
      required: false,
    },
    placeholder: {
      control: {
        type: "text",
        required: false,
      },
    },
  },
} as ComponentMeta<typeof InputField>;

export const MainInputField: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

MainInputField.args = {
  title: "Title",
  description:
    "This will be the visible title of the dashboard when it is rendered.",
  showTitle: true,
  showDescription: true,
  inputType: "text",
  placeholder: "Type here"
};
