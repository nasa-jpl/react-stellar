import { FormField } from "components/FormField";
import { Label } from "components/Label";
import { Input } from "index";

import { ComponentMeta } from "@storybook/react";
import { Error } from "components/Error";

export default {
  title: "Atoms/FormField",
  component: FormField,
} as ComponentMeta<typeof FormField>;

export const HorizontalFormField = () => (
  <FormField flow="horizontal">
    <Label required={true}>Name</Label>

    <FormField flow="vertical">
      <Input value="foo" />
      <Error>This is an error!</Error>
    </FormField>
  </FormField>
);

export const VerticalFormField = () => (
  <FormField flow="vertical">
    <Label required={true}>Name</Label>
    <Input value="foo" />
  </FormField>
);
