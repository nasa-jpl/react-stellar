import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SolIcon } from "components/Icons";
import { Button } from "components/Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "Tertiary Button",
  variant: "tertiary",
};

export const JSXChildren = Template.bind({});
JSXChildren.args = {
  children: (
    <>
      <SolIcon />
      <span>JSX Children</span>
      <SolIcon />
    </>
  ),
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "icon",
  icon: <SolIcon />,
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  variant: "secondary",
  size: "large",
};
