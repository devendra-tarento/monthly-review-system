import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EmptyState } from "./EmptyState";

export default {
  title: "Design System/Empty States",
  component: EmptyState,
  argTypes: {
    message: {
      control: {
        type: "text",
        required: true,
      },
    },
  },
} as ComponentMeta<typeof EmptyState>;

export const MainEmptyState: ComponentStory<typeof EmptyState> = (args) => (
  <EmptyState {...args} />
);

MainEmptyState.args = {
  message: "Empty message here!",
};
