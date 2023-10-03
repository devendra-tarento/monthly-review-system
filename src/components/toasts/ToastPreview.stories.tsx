import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToastPreview } from "./ToastPreview";

export default {
  title: "Design System/Toasts",
  component: ToastPreview,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["success", "warning", "error", "info"],
        required: true,
      },
    },
  },
} as ComponentMeta<typeof ToastPreview>;

export const MainToast: ComponentStory<typeof ToastPreview> = (args) => (
  <ToastPreview {...args} />
);

MainToast.args = {
  type: "success",
};
