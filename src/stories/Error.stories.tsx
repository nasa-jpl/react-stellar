import { Error } from "components/Error";
import { IconWarning } from "index";

import { ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/Error",
  component: Error,
} as ComponentMeta<typeof Error>;

export const ErrorString = () => <Error>Uh oh. This is an error!</Error>;

export const ErrorWithIcon = () => (
  <Error>
    <IconWarning /> Uh oh. This is an error! <IconWarning />
  </Error>
);
