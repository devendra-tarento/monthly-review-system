import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModalPreview } from "./ModalPreview";

export default {
  title: "Design System/Modals",
  component: ModalPreview,
  argTypes: {},
} as ComponentMeta<typeof ModalPreview>;

export const MainModalOne: ComponentStory<typeof ModalPreview> = (args) => (
  <ModalPreview {...args} />
);

MainModalOne.args = {
  modalId: "modalOne",
  modalLabel: "modalOneLabel",
};
