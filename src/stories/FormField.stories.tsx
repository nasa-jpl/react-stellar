import { FormField } from "components/FormField";
import { Label } from "components/Label";
import { Input } from "index";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Error } from "components/Error";
import { Checkbox } from "@radix-ui/react-checkbox";

export default {
  title: "Atoms/FormField",
  component: FormField,
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => (
  <FormField {...args} />
);

export const HorizontalFormField = Template.bind({});
HorizontalFormField.args = {
  flow: "horizontal",
  children: (
    <>
      <Label required={true}>Name</Label>

      <FormField flow="vertical">
        <Input value="foo" />
        <Error>This is an error!</Error>
      </FormField>
    </>
  ),
};

export const VerticalFormField = Template.bind({});
VerticalFormField.args = {
  flow: "vertical",
  children: (
    <>
      <Label required={true}>Name</Label>
      <Input value="foo" />
    </>
  ),
};

export const VerticalFormField2 = Template.bind({});
VerticalFormField2.args = {
  flow: "horizontal",
  children: (
    <>
      <Label required={true}>Name</Label>
      <Checkbox />
    </>
  ),
};
