import { Label } from "components/Label";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const StringLabel = Template.bind({});
StringLabel.args = {
  children: "Name",
};

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
  required: true,
  children: "Required Name",
};
