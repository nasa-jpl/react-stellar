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
