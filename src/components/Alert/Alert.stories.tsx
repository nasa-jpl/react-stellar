import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertAction, AlertCancel } from "components/Alert";
import { Button } from "index";

export default { component: Alert } as Meta<typeof Alert>;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "Are you sure?",
    trigger: (
      <Button size="large" onClick={() => {}}>
        Open Alert
      </Button>
    ),
    description:
      "This action cannot be undone, are you sure you want to delete this item?",
    onOpenChange: action("open changed"),
    children: (
      <>
        <AlertCancel asChild>
          <Button variant="secondary" onClick={action("action")}>
            Cancel
          </Button>
        </AlertCancel>
        <AlertAction asChild>
          <Button onClick={action("action")}>Delete</Button>
        </AlertAction>
      </>
    ),
  },
};

export const OverrideContentProps: Story = {
  parameters: { docs: { disable: true } },
  args: {
    ...Default.args,
    alertContentProps: {
      onEscapeKeyDown: (evt) => {
        evt.preventDefault();
      },
    },
    description:
      "Escape has been overridden to not automatically close the alert.",
    title: "Are you sure?",
  },
};

export const Controlled: Story = {
  parameters: { docs: { disable: true } },
  args: {
    ...Default.args,
    open: true,
    title: "Are you sure?",
  },
};
