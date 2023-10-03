import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MainNavBar } from "./MainNavBar";

export default {
  title: "Design System/Navigation",
  component: MainNavBar,
  argTypes: {
    isCollection: {
      control: {
        type: "boolean",
        required: true,
      },
    },
    logo: {
      control: {
        type: "file",
        accept: ".svg",
        required: false,
      },
    },
    logoLink: {
      control: { type: "text", required: false },
    },
    navItems: {
      control: { type: "object", required: false },
    },
    showNotifications: {
      control: { type: "boolean", required: true },
    },
    showSearch: { type: "boolean", required: true },
    navString: {
      control: { type: "text", required: false },
    },
  },
} as ComponentMeta<typeof MainNavBar>;

export const TopNavigationalBar: ComponentStory<typeof MainNavBar> = (args) => (
  <MainNavBar {...args} />
);

TopNavigationalBar.args = {
  navItems: [
    {
      id: 0,
      name: "Dashboards",
      link: "#",
    },
  ],
  isCollection: true,
  showSearch: true,
};
