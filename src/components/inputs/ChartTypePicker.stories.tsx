import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChartTypePicker } from "./ChartTypePicker";

export default {
  title: "Design System/Fields",
  component: ChartTypePicker,
  argTypes: {
    showTitle: {
      control: {
        type: "boolean",
        required: true,
      },
    },
    title: {
      control: {
        type: "text",
        required: false,
      },
    },
    itemList: {
      control: {
        type: "object",
        required: true,
      },
    },
  },
} as ComponentMeta<typeof ChartTypePicker>;

export const MainChartTypePicker: ComponentStory<typeof ChartTypePicker> = (
  args
) => <ChartTypePicker {...args} />;

MainChartTypePicker.args = {
  showTitle: true,
  title: "Chart type",
  itemList: [
    {
      id: 0,
      keyword: "bar_chart",
      itemName: "Vertical Bar Chart",
      isSelected: false,
      isInverted: false,
    },
    {
      id: 1,
      keyword: "bar_chart",
      itemName: "Horizontal Bar Chart",
      isSelected: false,
      isInverted: true,
    },
    {
      id: 2,
      keyword: "pie_chart",
      itemName: "Pie Chart",
      isSelected: false,
      isInverted: false,
    },
    {
      id: 3,
      keyword: "show_chart",
      itemName: "Line Chart",
      isSelected: false,
      isInverted: false,
    },
    {
      id: 4,
      keyword: "scatter_plot",
      itemName: "Bubble Chart",
      isSelected: false,
      isInverted: false,
    },
    {
      id: 5,
      keyword: "table_chart",
      itemName: "Table Chart",
      isSelected: false,
      isInverted: false,
    },
  ],
};
