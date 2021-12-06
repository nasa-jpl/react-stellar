import { IconSearch } from "components/Icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "components/Input";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const StringInput = Template.bind({});
StringInput.args = {
  label: "This is a string input",
  type: "string",
  placeholder: "placeholder",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  label: "This is a number input",
  type: "number",
};

export const IconInput = Template.bind({});
IconInput.args = {
  label: "This is an input with an icon",
  icon: <IconSearch />,
};

export const UnitInput = Template.bind({});
UnitInput.args = {
  label: "This is an input with a unit",
  icon: <IconSearch />,
  unit: "kg",
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  label: "This is an input with an error",
  error: "this is an error",
  value: "woops",
  icon: <IconSearch />,
  unit: "kg",
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  label: "This is disabled input",
  value: "i am disabled",
  disabled: true,
};

export const RequiredInput = Template.bind({});
RequiredInput.args = {
  label: "This is a required input",
  icon: <IconSearch />,
  placeholder: "type here",
  required: true,
};
