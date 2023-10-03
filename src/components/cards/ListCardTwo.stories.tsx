import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListCardTwo } from "./ListCardTwo";

export default {
  title: "Design System/Cards",
  component: ListCardTwo,
  argTypes: {
    name: {
      control: {
        type: "string",
        required: true,
      },
    },
    initialText: {
      control: {
        type: "string",
        required: false,
      },
    },
    bgColor: {
      control: "color",
    },
    showAvatar: {
      control: {
        type: "boolean",
        required: true,
      },
    },
    enableCheck: {
      control: {
        type: "boolean",
        required: true,
      },
    },
    isChecked: {
      control: {
        type: "boolean",
        required: false,
      },
    },
  },
} as ComponentMeta<typeof ListCardTwo>;

export const CardTwo: ComponentStory<typeof ListCardTwo> = (args) => (
  <ListCardTwo {...args} />
);

CardTwo.args = {
  name: "Aaron Almaraz",
  initialText: "AA",
  showAvatar: true,
  enableCheck: false,
};
