import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "components/Checkbox";

export default { component: Checkbox } as Meta<typeof Checkbox>;
type Story = StoryObj<typeof Checkbox>;

export const LabelLeft: Story = {
  args: {
    onCheckedChange: action("checked changed"),
    label: "Checkbox label",
  },
};

export const LabelRight = {
  args: {
    ...LabelLeft.args,
    labelPosition: "right",
  },
};

export const Unlabeled = {
  args: {},
};
