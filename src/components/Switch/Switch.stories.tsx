import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "components/Switch";

export default { component: Switch } as Meta<typeof Switch>;
type Story = StoryObj<typeof Switch>;

export const LabelLeft: Story = {
  args: {
    onCheckedChange: action("checked changed"),
    label: "Switch label 1",
  },
};

export const LabelRight = {
  args: {
    ...LabelLeft.args,
    label: "Switch label 2",
    labelPosition: "right",
  },
};

export const Unlabeled = {
  args: {},
};
