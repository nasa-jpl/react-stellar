import {
  IconChevronLeft,
  IconChevronRight,
  IconSearch,
} from "components/Icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "components/Input";
import { Button } from "index";

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const StringInput = Template.bind({});
StringInput.args = {
  type: "string",
  placeholder: "placeholder",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
};

export const IconInput = Template.bind({});
IconInput.args = {
  leftAdornment: <IconSearch />,
};

export const MultipleButtonIconInput = Template.bind({});
MultipleButtonIconInput.args = {
  rightAdornment: (
    <>
      <span>kg</span>
      <div>
        <Button icon={<IconChevronLeft />} variant="icon" />
        <Button icon={<IconChevronRight />} variant="icon" />
      </div>
      <IconSearch />
    </>
  ),
};

export const UnitInput = Template.bind({});
UnitInput.args = {
  leftAdornment: <IconSearch />,
  rightAdornment: "kg",
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  error: true,
  value: "woops",
  leftAdornment: <IconSearch />,
  rightAdornment: "kg",
};

export const WarningInput = Template.bind({});
WarningInput.args = {
  warning: true,
  value: "uh oh?",
  leftAdornment: <IconSearch />,
  rightAdornment: "kg",
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  value: "i am disabled",
  disabled: true,
};
