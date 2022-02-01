import classNames from "classnames";
import React from "react";

export interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
  flow: "horizontal" | "vertical";
}

export const FormField = ({ flow, className, children }: FormFieldProps) => {
  return (
    <div
      className={classNames("st-react-form-field", {
        ...(className ? { [className]: true } : {}),
        ...(flow === "horizontal"
          ? { "st-react-form-field--horizontal": true }
          : { "st-react-form-field--vertical": true }),
      })}
    >
      {children}
    </div>
  );
};
