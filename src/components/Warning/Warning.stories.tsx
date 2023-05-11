import { Warning } from "components/Warning";
import { IconWarning } from "index";

import { Meta } from "@storybook/react";

export default {
  component: Warning,
} as Meta<typeof Warning>;

export const WarningString = () => (
  <Warning>Uh oh. This is an warning!</Warning>
);

export const WarningWithIcon = () => (
  <Warning>
    <IconWarning /> Uh oh. This is an error! <IconWarning />
  </Warning>
);
