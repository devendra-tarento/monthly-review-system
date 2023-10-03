import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MainTab } from "./MainTab";

export default {
  title: "Design System/Tabs",
  component: MainTab,
  argTypes: {
    tabItems: {
      control: { type: "object", required: true },
    },
  },
} as ComponentMeta<typeof MainTab>;

export const MainTabPrimary: ComponentStory<typeof MainTab> = (args) => (
  <MainTab {...args} />
);

MainTabPrimary.args = {
  tabItems: [
    {
      id: 0,
      name: "Info",
      target: "#nav-info",
      control: "nav-info",
      tabId: "nav-info-tab",
      content: []
    },
    {
      id: 1,
      name: "Config",
      target: "#nav-config",
      control: "nav-config",
      tabId: "nav-config-tab",
      content: []
    },
    {
      id: 2,
      name: "Visualisations",
      target: "#nav-visualisations",
      control: "nav-visualisations",
      tabId: "nav-visualisations-tab",
      content: []
    },
    {
      id: 3,
      name: "Access",
      target: "#nav-access",
      control: "nav-access",
      tabId: "nav-access-tab",
      content: []
    },
    {
      id: 3,
      name: "Insights",
      target: "#nav-insights",
      control: "nav-insights",
      tabId: "nav-insights-tab",
      content: []
    },
  ],
};
