// import "!style-loader!css-loader!sass-loader!./scss-loader.scss";
import "../src/styles/styles.scss";
import "inter-ui";
import { useDarkMode } from "storybook-dark-mode";
import { ThemeContextProvider } from "../src/contexts/theme"; // TODO Fix imports what happened..?

// create a component that uses the dark mode hook
function ThemeWrapper(props) {
  // render your custom theme provider
  return (
    <ThemeContextProvider value={useDarkMode() ? "dark" : "light"}>
      {props.children}
    </ThemeContextProvider>
  );
}

export const decorators = [
  (renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
