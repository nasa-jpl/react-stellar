import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Popover, PopoverClose } from "components/Popover";
import { Button } from "index";

export default {
  title: "Molecules/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <div style={{ height: "500px" }}>
    <Popover {...args} />
  </div>
);

export const Interactive = Template.bind({});
Interactive.args = {
  contentProps: { sideOffset: 16 },
  onOpenChange: action("open changed"),
  children: (
    <>
      <div>
        <div className="st-typography-small-caps">Option Group 1</div>
        <div className="st-typography-medium">Checkbox 1 with label</div>
        <div className="st-typography-medium">Checkbox 2 with label</div>
        <div className="st-typography-medium">Checkbox 3 with label</div>
      </div>
      <br />
      <div>
        <div className="st-typography-small-caps">Option Group 2</div>
        <div className="st-typography-medium">Checkbox 1 with label</div>
        <div className="st-typography-medium">Checkbox 2 with label</div>
        <div className="st-typography-medium">Checkbox 3 with label</div>
      </div>
      <br />
      <PopoverClose asChild>
        <Button variant="secondary" style={{ width: "100%" }}>
          Close
        </Button>
      </PopoverClose>
    </>
  ),
  trigger: <Button>Open Popover</Button>,
};

export const ReactJSXExample = () => (
  <Popover
    trigger={<Button>Open Popover</Button>}
    contentProps={{ sideOffset: 16 }}
  >
    <div>
      <div className="st-typography-small-caps">Option Group 1</div>
      <div className="st-typography-medium">Checkbox 1 with label</div>
      <div className="st-typography-medium">Checkbox 2 with label</div>
      <div className="st-typography-medium">Checkbox 3 with label</div>
    </div>
    <br />
    <div>
      <div className="st-typography-small-caps">Option Group 2</div>
      <div className="st-typography-medium">Checkbox 1 with label</div>
      <div className="st-typography-medium">Checkbox 2 with label</div>
      <div className="st-typography-medium">Checkbox 3 with label</div>
    </div>
    <br />
    <PopoverClose asChild>
      <Button variant="secondary" style={{ width: "100%" }}>
        Close
      </Button>
    </PopoverClose>
  </Popover>
);
