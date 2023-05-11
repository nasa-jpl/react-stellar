import { FormField } from "components/FormField";
import { Label } from "components/Label";
import { Input } from "components/Input";

import { Meta, StoryFn } from "@storybook/react";
import { Error } from "components/Error";
import { Checkbox } from "@radix-ui/react-checkbox";

export default { component: FormField } as Meta<typeof FormField>;

export const HorizontalFormField = {
  args: {
    flow: "horizontal",
    children: (
      <>
        <Label required={true}>Name</Label>

        <FormField flow="vertical">
          <Input defaultValue="foo" />
          <Error>This is an error!</Error>
        </FormField>
      </>
    ),
  },
};

export const VerticalFormField = {
  args: {
    flow: "vertical",
    children: (
      <>
        <Label required={true}>Name</Label>
        <Input defaultValue="foo" />
      </>
    ),
  },
};
