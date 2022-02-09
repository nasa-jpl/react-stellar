import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextField } from "components/Fields/TextField";

export default {
  title: "Molecules/Fields/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const StringTextField = Template.bind({});
StringTextField.args = {
  type: "string",
  placeholder: "placeholder",
  labelPosition: "left",
  label: "Name",
  required: true,
};

export const StringTextErrorField = Template.bind({});
StringTextErrorField.args = {
  type: "string",
  placeholder: "placeholder",
  error: "this field is required",
  labelPosition: "top",
  label: "Name",
  required: true,
};
