import "../src/styles/styles.scss";
// import "inter-ui";
import { useDarkMode } from "storybook-dark-mode";

// create a component that uses the dark mode hook
function ThemeWrapper(props) {
  // render your custom theme provider
  return (
    <div className={useDarkMode() ? "st-theme-dark" : ""}>{props.children}</div>
  );
}

export const decorators = [
  (renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
