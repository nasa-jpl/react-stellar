import classNames from "classnames";
import React, { forwardRef } from "react";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  inputClassName?: string;
  error?: boolean;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      inputClassName,
      error,
      leftAdornment,
      rightAdornment,
      ...inputProps
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div
        className={classNames("st-react-input", {
          ...(className ? { [className]: true } : {}),
        })}
      >
        <div
          className={classNames("st-react-input--container", {
            error,
          })}
        >
          {leftAdornment ? (
            <div className="st-react-input--adornment">{leftAdornment}</div>
          ) : null}
          <input
            className={classNames("st-input st-react-input--input", {
              ...(inputClassName ? { [inputClassName]: true } : {}),
              error,
            })}
            ref={ref}
            {...inputProps}
          />
          {rightAdornment ? (
            <div className="st-react-input--adornment">{rightAdornment}</div>
          ) : null}
        </div>
      </div>
    );
  },
);
