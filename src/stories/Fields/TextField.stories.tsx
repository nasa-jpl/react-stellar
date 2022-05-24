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

export const StringTextWarningField = Template.bind({});
StringTextWarningField.args = {
  type: "string",
  placeholder: "placeholder",
  warning: "this field has a warning",
  labelPosition: "left",
  label: "Name",
};

export const TextFieldWithHelper = Template.bind({});
TextFieldWithHelper.args = {
  type: "string",
  placeholder: "placeholder",
  helperText: "this is some helper text",
  labelPosition: "left",
  label: "Name",
};

export const MultipleVerticalTextFields = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "200px 200px 200px",
      alignItems: "center",
    }}
  >
    <TextField placeholder="text 1" label="TextField 1" labelPosition="top" />
    <TextField
      placeholder="text 1"
      label="TextField 1"
      labelPosition="top"
      error="oops"
    />
    <TextField
      placeholder="text 1"
      label="TextField 1"
      labelPosition="top"
      warning="uh oh"
    />
  </div>
);

export const MultipleHorizontalTextFields = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      alignItems: "center",
    }}
  >
    <TextField placeholder="text 1" label="TextField 1" labelPosition="left" />
    <TextField
      placeholder="text 1"
      label="TextField 1"
      labelPosition="left"
      error="oops"
    />
    <TextField
      placeholder="text 1"
      label="TextField 1"
      labelPosition="left"
      warning="uh oh"
    />
  </div>
);
