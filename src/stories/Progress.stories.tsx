import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Progress } from "components/Progress";

export default {
  title: "Atoms/Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  progress: 50,
};

export const Indeterminate = Template.bind({});
