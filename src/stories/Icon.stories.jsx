import * as IconComponents from "components/Icons";
import { IconRover } from "components/Icons";
import * as PhosphorIconComponents from "phosphor-react";
import { FolderSimple, Horse, Heart, Cube, IconContext } from "phosphor-react";
import "./Icon.stories.css";

export default {
  title: "Atoms/Icons",
};

export const AllStellarIcons = () => (
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

export const StellarIconJSXExample = () => <IconRover />;

export const AllPhosphorIcons = () => (
  <div
    className="icon-stories"
    style={{ lineHeight: "100px", margin: "50px", height: "100%" }}
  >
    {Object.keys(PhosphorIconComponents)
      .sort()
      .map((key) => {
        const Component = PhosphorIconComponents[key];
        if (!Component.render) return <></>;
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
            <Component weight="fill" />
            <div className="st-typography-body">{key}</div>
          </div>
        );
      })}
  </div>
);

export const PhosphorIconJSXExample = () => <FolderSimple weight="fill" />;
export const PhosphorIconJSXExampleWithStylingContext = () => (
  <IconContext.Provider
    value={{
      size: 16,
      weight: "fill",
    }}
  >
    <div>
      <Horse />
      <Heart />
      <Cube />
    </div>
  </IconContext.Provider>
);
