import { IconSearch } from "components/Icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField } from "components/Fields/TextField";

export default {
  title: "Atoms/Fields/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const StringTextField = Template.bind({});
StringTextField.args = {
  type: "string",
  placeholder: "placeholder",
  flow: "horizontal",
  label: "Name",
  required: true,
};

export const StringTextErrorField = Template.bind({});
StringTextErrorField.args = {
  type: "string",
  placeholder: "placeholder",
  error: "this field is required",
  flow: "horizontal",
  label: "Name",
  required: true,
};
