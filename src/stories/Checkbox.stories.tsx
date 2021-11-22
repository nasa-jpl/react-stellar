import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "components/Checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox onCheckedChange={action("checked changed")} {...args} />
);

export const LabelLeft = Template.bind({});
LabelLeft.args = {
  label: "This is a label",
};

export const LabelRight = Template.bind({});
LabelRight.args = {
  required: true,
  label: "This is a label",
  labelPosition: "right",
};

export const Unlabeled = Template.bind({});
Unlabeled.args = {};
