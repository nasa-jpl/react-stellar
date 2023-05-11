import { Meta } from "@storybook/react";
import { TextField } from "components/Fields/TextField";

export default {
  component: TextField,
} as Meta<typeof TextField>;

export const StringTextField = {
  args: {
    type: "string",
    placeholder: "placeholder",
    labelPosition: "left",
    label: "Name",
    required: true,
  },
};

export const StringTextErrorField = {
  args: {
    type: "string",
    placeholder: "placeholder",
    error: "this field is required",
    labelPosition: "top",
    label: "Name",
    required: true,
  },
};

export const StringTextWarningField = {
  args: {
    type: "string",
    placeholder: "placeholder",
    warning: "this field has a warning",
    labelPosition: "left",
    label: "Name",
  },
};

export const TextFieldWithHelper = {
  args: {
    type: "string",
    placeholder: "placeholder",
    helperText: "this is some helper text",
    labelPosition: "left",
    label: "Name",
  },
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
