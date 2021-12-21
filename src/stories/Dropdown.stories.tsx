import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown } from "components/Dropdown";
import { IconSol } from "index";

export default {
  title: "Atoms/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Label 1", value: 1 },
    { label: "Label 2", value: 2 },
    { label: "Label 3", value: 3 },
    { label: "Label 4", value: 4 },
    { label: "Label 5", value: 5 },
    { label: "Label 6", value: 6 },
  ],
  label: "Dropdown Label",
  labelPosition: "top",
};

export const LongList = Template.bind({});
const longListItems = [];
for (let i = 0; i < 100; i++)
  longListItems.push({ label: `Label ${i}`, value: i });
LongList.args = {
  options: longListItems,
  label: "Dropdown Label",
  labelPosition: "top",
};

export const Searchable = Template.bind({});
Searchable.args = {
  options: longListItems,
  label: "Dropdown Label",
  labelPosition: "top",
  isSearchable: true,
};

export const Clearable = Template.bind({});
Clearable.args = {
  options: longListItems,
  label: "Dropdown Label",
  labelPosition: "top",
  isClearable: true,
};

export const InnerLabel = Template.bind({});
InnerLabel.args = {
  options: longListItems,
  label: "Dropdown Label",
  labelPosition: "inner",
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  options: [
    { label: "Label 1", value: 1 },
    { label: "Label 2", value: 2 },
    { label: "Label 3", value: 3 },
    { label: "Label 4", value: 4 },
    { label: "Label 5", value: 5 },
    { label: "Label 6", value: 6 },
  ],
  label: "Dropdown Label",
  labelPosition: "top",
  isMulti: true,
};

export const JSXOptions = Template.bind({});
JSXOptions.args = {
  options: [
    {
      label: (
        <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
          <IconSol />
          Label 1
        </div>
      ),
      value: 1,
    },
    {
      label: (
        <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
          <IconSol />
          Label 2
        </div>
      ),
      value: 2,
    },
    {
      label: (
        <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
          <IconSol />
          Label 3
        </div>
      ),
      value: 3,
    },
  ],
  label: "Dropdown Label",
  labelPosition: "top",
};
