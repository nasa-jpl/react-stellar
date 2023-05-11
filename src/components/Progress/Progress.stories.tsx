import { StoryFn, Meta } from "@storybook/react";
import { Progress } from "components/Progress";

export default {
  component: Progress,
} as Meta<typeof Progress>;

export const Default = {
  args: {
    progress: 50,
  },
};

export const Indeterminate = {};
