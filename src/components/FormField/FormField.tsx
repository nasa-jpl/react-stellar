import classNames from "classnames";
import React from "react";

export interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
  flow?: "horizontal" | "vertical";
}

export const FormField = ({
  flow = "vertical",
  className,
  children,
}: FormFieldProps) => {
  const containerClassName = classNames("st-react-form-field", {
    ...(className ? { [className]: true } : {}),
    "st-react-form-field--vertical": flow === "vertical",
    "st-react-form-field--horizontal": flow === "horizontal",
  });

  return <div className={containerClassName}>{children}</div>;
};
