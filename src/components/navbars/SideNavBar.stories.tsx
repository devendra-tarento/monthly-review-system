import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SideNavBar } from "./SideNavBar";

export default {
  title: "Design System/Navigation",
  component: SideNavBar,
  argTypes: {
    navItems: {
      control: { type: "object", required: true },
    },
    showIcons: {
      control: {
        type: "boolean",
        required: false,
      },
    },
  },
} as ComponentMeta<typeof SideNavBar>;

export const SideNavigationalBar: ComponentStory<typeof SideNavBar> = (
  args
) => <SideNavBar {...args} />;

SideNavigationalBar.args = {
  navItems: [
    {
      id: 0,
      title: "DATA ANALYTICS",
      children: [
        {
          id: 0,
          name: "Dashboards",
          link: [],
          icon: "dashboard",
        },
        {
          id: 1,
          name: "Visualizations",
          link: [],
          icon: "bar_chart",
        },
      ],
    },
    {
      id: 1,
      title: "DATA PLATFORM",
      children: [
        {
          id: 0,
          name: "Datasources",
          link: [],
          icon: "dns",
        },
        {
          id: 1,
          name: "Data lake",
          link: [],
          icon: "dns",
        },
      ],
    },
    {
      id: 2,
      title: "USER MANAGEMENT",
      children: [
        {
          id: 0,
          name: "Users",
          link: [],
          icon: "group",
        },
        {
          id: 1,
          name: "Roles",
          link: [],
          icon: "settings",
        },
      ],
    },
  ],
  showIcons: true,
};
