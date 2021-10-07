import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../../contexts/theme/theme"; // TODO Fix imports what happened..?

export type TypographyProps = {
  children?: string | React.ReactNode;
  elementType?: "div" | "span";
  type?:
    | "header"
    | "label"
    | "body"
    | "medium"
    | "bold"
    | "smallCaps"
    | "displayH1"
    | "displayH2"
    | "displayH3"
    | "displayBody";
  className?: string;
};

export const Typography = (props: TypographyProps) => {
  const {
    children,
    elementType = "div",
    type = "body",
    className = "",
  } = props;
  const theme = useContext(ThemeContext);

  const containerClass = classNames({
    [`stellar-typography--${type}`]: true,
    [`stellar-typography--${type}--${theme}`]: true,
    [className]: !!className,
  });
  return (
    <>
      {elementType === "div" && (
        <div className={containerClass}>{children}</div>
      )}
      {elementType === "span" && (
        <span className={containerClass}>{children}</span>
      )}
    </>
  );
};
