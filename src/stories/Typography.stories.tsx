import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Typography } from "../components/Typography";
import { ThemeContextProvider } from "../contexts/theme/theme";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const ThemeTest = () => (
  <div>
    <Typography type="displayH1">Display H1</Typography>
    <Typography type="displayH2">Display H2</Typography>
    <Typography type="displayH3">Display H3</Typography>
    <Typography type="displayBody">Display Body</Typography>
    <Typography type="header">Header</Typography>
    <Typography type="label">Label</Typography>
    <Typography type="body">Body</Typography>
    <Typography type="medium">Medium</Typography>
    <Typography type="bold">Bold</Typography>
    <Typography type="smallCaps">Small Caps</Typography>
  </div>
);
