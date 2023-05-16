import { Warning } from "components/Warning";
import { IconWarning } from "index";

import { Meta } from "@storybook/react";

export default { component: Warning } as Meta<typeof Warning>;

export const Default: Story = {
  args: {
    children: "Warning, something is awry",
  },
};

export const WarningWithIcon: Story = {
  args: {
    children: (
      <>
        <IconWarning />
        Warning, something is awry
        <IconWarning />
      </>
    ),
  },
};
