import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Search } from "./Search";

export default {
  title: "Design System/Fields",
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

export const SearchField: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);

SearchField.args = {};
