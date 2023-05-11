import { action } from "@storybook/addon-actions";
import { StoryFn, Meta } from "@storybook/react";
import { Checkbox } from "components/Checkbox";

export default {
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => (
  <Checkbox onCheckedChange={action("checked changed")} {...args} />
);

export const LabelLeft = {
  render: Template,

  args: {
    label: "This is a label",
  },
};

export const LabelRight = {
  render: Template,

  args: {
    required: true,
    label: "This is a label",
    labelPosition: "right",
  },
};

export const Unlabeled = {
  render: Template,
  args: {},
};
