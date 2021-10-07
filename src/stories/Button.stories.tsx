import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SolIcon } from "../components/Icons";
import { Button } from "../components/Button";
import { ThemeContextProvider } from "../contexts/theme";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "icon",
  icon: <SolIcon />,
};

export const ThemeTest = () => (
  <div>
    <div>
      <ThemeContextProvider value="dark">
        <Button variant="secondary" onClick={() => {}}>
          Dark No Matter Global Theme
        </Button>
      </ThemeContextProvider>
    </div>
    <br />
    <div>
      <ThemeContextProvider value="light">
        <Button variant="secondary" onClick={() => {}}>
          Light No Matter Global Theme
        </Button>
      </ThemeContextProvider>
    </div>
  </div>
);
