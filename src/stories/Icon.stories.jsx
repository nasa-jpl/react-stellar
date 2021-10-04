import * as IconComponents from "../components/Icons";

export default {
  title: "Atoms/Icon",
};

export const Icons_Light = () => (
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
            <div className="body">{key}</div>
          </div>
        );
      })}
  </div>
);

export const Icons_Dark = () => (
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
            <div className="body">{key}</div>
          </div>
        );
      })}
  </div>
);
