import classNames from "classnames";
import React, { forwardRef, useCallback } from "react";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  unit?: string;
  icon?: JSX.Element;
  type: "string" | "number";
  labelClassName?: string;
  inputClassName?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      unit,
      className,
      icon,
      labelClassName,
      inputClassName,
      error,
      required,
      onChange,
      ...inputProps
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <div
        className={classNames("st-react-input", {
          ...(className ? { [className]: true } : {}),
        })}
      >
        <div className="st-react-input--label-layout-wrapper">
          <div className="st-react-input--label st-typography-label">
            {label}
          </div>
          {required ? (
            <div className="st-react-input--label-required st-typography-label">
              Required
            </div>
          ) : null}
        </div>
        <div
          className={classNames("st-react-input--container", {
            error: !!error,
          })}
        >
          {icon ? <div className="st-react-input--icon">{icon}</div> : null}
          <input
            className={classNames("st-input st-react-input--input", {
              ...(inputClassName ? { [inputClassName]: true } : {}),
              error: !!error,
            })}
            ref={ref}
            {...inputProps}
          />
          {unit ? <div className="st-react-input--unit">{unit}</div> : null}
        </div>
      </div>
    );
  },
);
