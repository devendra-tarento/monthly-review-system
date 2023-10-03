import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListCard } from "./ListCard";

export default {
  title: "Design System/Cards",
  component: ListCard,
  argTypes: {
    showDrag: {
      control: { type: "boolean", required: false },
    },
    showPin: {
      control: { type: "boolean", required: false },
    },
    heading: {
      control: {
        type: "string",
        required: true,
      },
    },
    subHeading: {
      control: {
        type: "string",
        required: false,
      },
    },
    timestamp: {
      control: {
        type: "string",
        required: false,
      },
    },
  },
} as ComponentMeta<typeof ListCard>;

export const CardOne: ComponentStory<typeof ListCard> = (args) => (
  <ListCard {...args} />
);

CardOne.args = {
  showDrag: true,
  showPin: true,
  heading: "CSAT",
  timestamp: "dd/mm/yyyy",
  subHeading: "Text"
};
