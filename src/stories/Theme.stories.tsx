import { Button } from "components/Button";
import { Typography } from "components/Typography";
import { ThemeContextProvider } from "contexts/theme";
import "./Theme.stories.css";

export default {
  title: "System/Theme",
};

const component = () => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button variant="primary" onClick={() => {}}>
        Button
      </Button>
      <Button variant="secondary" onClick={() => {}}>
        Button
      </Button>
    </div>
  );
};

export const Theme = () => (
  <div>
    <div>
      <div
        style={{
          padding: "8px",
          border: "1px solid black",
        }}
      >
        <Typography type="header">
          Global Theme (Closest ThemeContextProvider)
        </Typography>
        <br />
        {component()}
      </div>
    </div>
    <br />
    <div>
      <ThemeContextProvider value="dark">
        <div
          style={{
            padding: "8px",
            border: "1px solid black",
            background: "black",
          }}
        >
          <Typography type="header">Scoped Dark Theme</Typography>
          <br />
          {component()}
        </div>
      </ThemeContextProvider>
    </div>
    <br />
    <div>
      <ThemeContextProvider value="light">
        <div
          style={{
            padding: "8px",
            border: "1px solid black",
            background: "white",
          }}
        >
          <Typography type="header">Scoped Light Theme</Typography>
          <br />
          {component()}
        </div>
      </ThemeContextProvider>
    </div>
    <br />
    <div>
      <div
        style={{
          padding: "8px",
          border: "1px solid black",
        }}
        className="my-theme"
      >
        <Typography type="header">Scoped CSS Variable Overrides</Typography>
        <br />
        {component()}
      </div>
    </div>
    <br />
  </div>
);
