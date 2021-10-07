import { Typography } from "../components/Typography";
import * as IconComponents from "../components/Icons";

export default {
  title: "Atoms/Icons",
};

export const AllIcons = () => (
  <div style={{ lineHeight: "100px", margin: "50px", height: "100%" }}>
    {Object.keys(IconComponents)
      .filter((key) => typeof IconComponents[key] === "function")
      .sort()
      .map((key) => {
        const component = IconComponents[key]();
        return (
          <div
            style={{
              marginRight: "24px",
              lineHeight: "24px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {component}
            <Typography type="body">{key}</Typography>
          </div>
        );
      })}
  </div>
);
