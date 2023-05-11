import { action } from "@storybook/addon-actions";
import { StoryFn, Meta } from "@storybook/react";

import { Alert, AlertAction, AlertCancel } from "components/Alert";
import { Button } from "index";

export default {
  component: Alert,
} as Meta<typeof Alert>;

export const Controlled = {
  parameters: { docs: { disable: true } },

  args: {
    open: true,
    title: "Are you sure?",
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

export const OverrideContentProps = {
  parameters: { docs: { disable: true } },

  args: {
    title: "Are you sure?",
    trigger: (
      <Button size="large" onClick={() => {}}>
        Open Alert
      </Button>
    ),
    description:
      "Escape has been overridden to not automatically close the alert.",
    onOpenChange: action("open changed"),
    alertContentProps: {
      onEscapeKeyDown: (evt) => {
        evt.preventDefault();
      },
    },
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

export const ReactJSXExample = () => (
  <Alert
    title="Are you sure?"
    description="This action cannot be undone, are you sure you want to delete this item?"
    trigger={
      <Button size="large" onClick={() => {}}>
        Open Alert
      </Button>
    }
  >
    <AlertCancel asChild>
      <Button variant="secondary" onClick={action("action")}>
        Cancel
      </Button>
    </AlertCancel>
    <AlertAction asChild>
      <Button onClick={action("action")}>Delete</Button>
    </AlertAction>
  </Alert>
);
