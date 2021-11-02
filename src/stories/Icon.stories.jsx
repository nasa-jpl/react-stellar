import * as IconComponents from "components/Icons";
import "./Icon.stories.css";

export default {
  title: "Atoms/Icons",
};

export const AllIcons = () => (
  <div
    className="icon-stories"
    style={{ lineHeight: "100px", margin: "50px", height: "100%" }}
  >
    {Object.keys(IconComponents)
      .filter((key) => typeof IconComponents[key] === "function")
      .sort()
      .map((key) => {
        const component = IconComponents[key]();
        return (
          <div
            key={key}
            style={{
              marginRight: "24px",
              lineHeight: "24px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {component}
            <div className="st-typography-body">{key}</div>
          </div>
        );
      })}
  </div>
);
