import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SubHeadingTwo } from "./SubHeadingTwo";

export default {
  title: "Design System/Headings",
  component: SubHeadingTwo,
  argTypes: {
    title: {
      defaultValue: "Title",
      control: { type: "text", required: true },
    },
    textColor: {
      control: { type: "color", required: false },
    },
  },
} as ComponentMeta<typeof SubHeadingTwo>;

export const MainSubHeadingTwo: ComponentStory<typeof SubHeadingTwo> = (
  args
) => <SubHeadingTwo {...args} />;

MainSubHeadingTwo.args = {
  title: "List of dashboards",
};
