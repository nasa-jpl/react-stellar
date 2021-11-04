import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Alert, AlertAction, AlertCancel } from "components/Alert";
import { Button } from "index";

export default {
  title: "Molecules/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Controlled = Template.bind({});
Controlled.args = {
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
};

export const Interactive = Template.bind({});
Interactive.args = {
  trigger: (
    <Button size="large" onClick={() => {}}>
      Open Alert
    </Button>
  ),
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
};
