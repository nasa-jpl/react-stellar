import { Warning } from "components/Warning";
import { IconWarning } from "index";

import { ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Warning",
  component: Warning,
} as ComponentMeta<typeof Warning>;

export const WarningString = () => (
  <Warning>Uh oh. This is an warning!</Warning>
);

export const WarningWithIcon = () => (
  <Warning>
    <IconWarning /> Uh oh. This is an error! <IconWarning />
  </Warning>
);
