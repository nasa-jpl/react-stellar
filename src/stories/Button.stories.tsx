import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: "Primary Button",
  theme: "dark",
};

export const Primary_Dark = Template.bind({});
Primary_Dark.args = {
  children: "Primary Button",
};

export const Secondary_Light = Template.bind({});
Secondary_Light.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: "Secondary Button",
  variant: "secondary",
  theme: "dark",
};
