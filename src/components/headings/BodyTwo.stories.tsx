import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BodyTwo } from "./BodyTwo";

export default {
  title: "Design System/Headings",
  component: BodyTwo,
  argTypes: {
    content: {
      defaultValue: "Content",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof BodyTwo>;

export const MainBodyTwo: ComponentStory<typeof BodyTwo> = (args) => (
  <BodyTwo {...args} />
);

MainBodyTwo.args = {
  content: "List of dashboards",
};
