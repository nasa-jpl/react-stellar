import {
  IconChevronLeft,
  IconChevronRight,
  IconSearch,
} from "components/Icons";
import { StoryFn, Meta } from "@storybook/react";
import { Input } from "components/Input";
import { Button } from "components/Button";

export default {
  component: Input,
} as Meta<typeof Input>;

export const StringInput = {
  args: {
    type: "string",
    placeholder: "placeholder",
  },
};

export const NumberInput = {
  args: {
    type: "number",
  },
};

export const IconInput = {
  args: {
    leftAdornment: <IconSearch />,
  },
};

export const MultipleButtonIconInput = {
  args: {
    rightAdornment: (
      <>
        <span>kg</span>
        <div>
          <Button icon={<IconChevronLeft />} variant="icon" />
          <Button icon={<IconChevronRight />} variant="icon" />
        </div>
        <IconSearch />
      </>
    ),
  },
};

export const UnitInput = {
  args: {
    leftAdornment: <IconSearch />,
    rightAdornment: "kg",
  },
};

export const ErrorInput = {
  args: {
    error: true,
    defaultValue: "woops",
    leftAdornment: <IconSearch />,
    rightAdornment: "kg",
  },
};

export const WarningInput = {
  args: {
    warning: true,
    defaultValue: "uh oh?",
    leftAdornment: <IconSearch />,
    rightAdornment: "kg",
  },
};

export const DisabledInput = {
  args: {
    defaultValue: "i am disabled",
    disabled: true,
  },
};
