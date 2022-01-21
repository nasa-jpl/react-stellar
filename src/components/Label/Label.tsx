import classNames from 'classnames';
import React from 'react';

export interface LabelProps {
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export const Label = ({
  children,
  className,
  required,
}: LabelProps): JSX.Element => {
  return (
    <div
      className={classNames("st-react-label st-typography-label", {
        ...(className ? { [className]: true } : {}),
      })}
    >
      {required ? (
        <span className="st-react-label--required-mark">*</span>
      ) : null}
      {children}
    </div>
  );
};
