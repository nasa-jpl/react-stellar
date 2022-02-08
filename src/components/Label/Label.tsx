import React from "react";

import classNames from "classnames";

export interface LabelProps {
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export const Label = ({
  children,
  className = "",
  required,
}: LabelProps): JSX.Element => {
  return (
    <div
      className={classNames("st-react-label st-typography-label", {
        [className]: !!className,
      })}
    >
      {required && <span className="st-react-label--required-mark">*</span>}
      {children}
    </div>
  );
};
