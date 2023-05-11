import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "components/Dropdown";
import { IconSol } from "index";

export default { component: Dropdown } as Meta<typeof Dropdown>;
type Story = StoryObj<typeof Dropdown>;

const longListItems = [];
for (let i = 0; i < 100; i++) {
  longListItems.push({ label: `Label ${i}`, value: i });
}

export const Default: Story = {
  args: {
    onChange: action("changed"),
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
  },
};

export const DefaultLeftLabel = {
  args: {
    ...Default.args,
    options: [
      { label: "Label 1", value: 1 },
      { label: "Label 2", value: 2 },
      { label: "Label 3", value: 3 },
      { label: "Label 4", value: 4 },
      { label: "Label 5", value: 5 },
      { label: "Label 6", value: 6 },
    ],
    label: "Dropdown Left Label",
    labelPosition: "left",
  },
};

export const LongList = {
  args: {
    ...Default.args,
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "top",
  },
};

export const MaxHeight = {
  args: {
    ...Default.args,
    maxMenuHeight: 72,
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "top",
  },
};

export const Searchable = {
  args: {
    ...Default.args,
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "top",
    isSearchable: true,
  },
};

export const Clearable = {
  args: {
    ...Default.args,
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "top",
    isClearable: true,
  },
};

export const InnerLabel = {
  args: {
    ...Default.args,
    options: longListItems,
    label: "Dropdown Label",
    labelPosition: "inner",
  },
};

export const MultipleSelection = {
  args: {
    ...Default.args,
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
  },
};

export const JSXOptions = {
  args: {
    ...Default.args,
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
  },
};
