import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "contexts/theme/theme";

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
} & React.HTMLAttributes<HTMLElement>;

export const Typography = (props: TypographyProps) => {
  const {
    children,
    elementType = "div",
    type = "body",
    className = "",
    ...other
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
        <div className={containerClass} {...other}>
          {children}
        </div>
      )}
      {elementType === "span" && (
        <span className={containerClass} {...other}>
          {children}
        </span>
      )}
    </>
  );
};
