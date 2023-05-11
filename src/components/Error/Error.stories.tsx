import { Error } from "components/Error";
import { IconWarning } from "index";

import { Meta } from "@storybook/react";

export default {
  component: Error,
} as Meta<typeof Error>;

export const ErrorString = () => <Error>Uh oh. This is an error!</Error>;

export const ErrorWithIcon = () => (
  <Error>
    <IconWarning /> Uh oh. This is an error! <IconWarning />
  </Error>
);
