import classNames from "classnames";
import React, { forwardRef } from "react";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  inputClassName?: string;
  error?: boolean;
  warning?: boolean;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
}

export const Input = ({
  ref,
  className = "",
  inputClassName = "",
  error,
  warning,
  leftAdornment,
  rightAdornment,
  ...inputProps
}: InputProps) => {
  return (
    <div
      className={classNames("st-react-input", {
        [className]: !!className,
      })}
    >
      <div
        className={classNames("st-react-input--container", {
          error,
          warning,
        })}
      >
        {leftAdornment && (
          <div className="st-react-input--adornment">{leftAdornment}</div>
        )}
        <input
          className={classNames("st-react-input--input", {
            [inputClassName]: !!inputClassName,
          })}
          ref={ref}
          {...inputProps}
        />
        {rightAdornment && (
          <div className="st-react-input--adornment">{rightAdornment}</div>
        )}
      </div>
    </div>
  );
};
