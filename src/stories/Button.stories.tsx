import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "components/Button";
import IconSol from "components/Icons/Sol";
import { Heart } from "phosphor-react";

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
      <IconSol />
      <span>JSX Children</span>
      <IconSol />
    </>
  ),
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "icon",
  icon: <IconSol />,
};

export const IconPhosphor = Template.bind({});
IconPhosphor.args = {
  variant: "icon",
  icon: <Heart size="16" weight="fill" />,
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  variant: "secondary",
  size: "large",
};
