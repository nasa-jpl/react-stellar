import classNames from "classnames";
import React, { forwardRef, useCallback } from "react";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type: "string" | "number";
  inputClassName?: string;
  error?: boolean;
  leftAdornment?: string | JSX.Element | JSX.Element[];
  rightAdornment?: string | JSX.Element | JSX.Element[];
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
  ): JSX.Element => {
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
