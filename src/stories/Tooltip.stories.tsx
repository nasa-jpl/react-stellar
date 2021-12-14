import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip } from "components/Tooltip";
import { Button, IconSol } from "index";

export default {
  title: "Atoms/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div
    className="st-typography-medium"
    style={{
      height: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Tooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <Button>Hover over me</Button>,
  content: "Tooltip Content",
};

export const DelayDuration = Template.bind({});
DelayDuration.args = {
  delayDuration: 0,
  children: <Button>No Delay</Button>,
  content: "Tooltip Content",
};

export const PreferredSide = Template.bind({});
PreferredSide.args = {
  contentProps: { side: "bottom", align: "start" },
  children: <Button>Bottom Start)</Button>,
  content: "Tooltip Content",
};

export const JSXChildren = Template.bind({});
JSXChildren.args = {
  children: <Button>Hover over me</Button>,
  content: (
    <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
      <IconSol />
      Tooltip Content
    </div>
  ),
};

export const DisabledContent = Template.bind({});
DisabledContent.args = {
  children: (
    <span tabIndex={0}>
      <Button disabled style={{ pointerEvents: "none" }}>
        Disabled Content
      </Button>
    </span>
  ),
  content: (
    <div style={{ display: "flex", gap: "var(--st-grid-unit)" }}>
      <IconSol />
      Tooltip Content
    </div>
  ),
};

export const ReactJSXExample = () => (
  <div
    className="st-typography-medium"
    style={{
      height: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Tooltip content="Tooltip Content">
      <Button>Hover over me</Button>
    </Tooltip>
  </div>
);
