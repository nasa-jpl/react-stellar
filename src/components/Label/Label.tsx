import React from "react";

import classNames from "classnames";

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
  required?: boolean;
}

export const Label = ({
  children,
  className = "",
  required,
  htmlFor,
}: LabelProps): JSX.Element => {
  const optionalProps: { htmlFor?: string } = {};
  if (htmlFor) optionalProps.htmlFor = htmlFor;
  return (
    <label
      className={classNames("st-react-label st-typography-label", {
        [className]: !!className,
      })}
      {...optionalProps}
    >
      {required && <span className="st-react-label--required-mark">*</span>}
      {children}
    </label>
  );
};
