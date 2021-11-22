import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Popover, PopoverClose } from "components/Popover";
import { Button } from "index";

export default {
  title: "Molecules/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: "Overlay content, triggered by a button.",
      },
    },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <div style={{ height: "500px" }}>
    <Popover {...args} />
  </div>
);

export const Interactive = Template.bind({});
Interactive.args = {
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

export const OverridingRadixProps = () => (
  <Popover
    // All other props are spread to the Radix Popover Root.
    // See https://www.radix-ui.com/docs/primitives/components/popover#root
    // for a full list of Root props
    modal // Radix Popover Root prop example
    onOpenChange={action("open changed")} // Radix Popover Root prop example
    // Control the majority of the Popover behaviors by setting Radix Popover Content props.
    // See https://www.radix-ui.com/docs/primitives/components/popover#content
    // for a full list of Content props.
    // Common props include "side", "sideOffset", "align", and "avoidCollisions".
    contentProps={{
      sideOffset: 18,
      alignOffset: 32,
      onInteractOutside: (evt) => evt.preventDefault(),
      onPointerDownOutside: (evt) => evt.preventDefault(),
      onEscapeKeyDown: (evt) => evt.preventDefault(),
    }}
    trigger={<Button>Open Popover</Button>}
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

export const ReactJSXExample = () => (
  <Popover trigger={<Button>Open Popover</Button>}>
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
