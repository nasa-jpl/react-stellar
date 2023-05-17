import React, { useCallback, useState } from "react";

import classNames from "classnames";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  inputClassName?: string;
  error?: boolean;
  warning?: boolean;
  leftAdornment?: React.ReactNode;
  rightAdornment?: React.ReactNode;
}

export const Input = React.forwardRef(
  (
    {
      className = "",
      inputClassName = "",
      error,
      warning,
      leftAdornment,
      rightAdornment,
      onFocus,
      onBlur,
      ...inputProps
    }: InputProps,
    forwardedRef: React.Ref<HTMLInputElement>,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const focusCallback = useCallback(
      (event) => {
        setIsFocused(true);
        onFocus?.(event);
      },
      [onFocus],
    );
    const blurCallback = useCallback(
      (event) => {
        setIsFocused(false);
        onBlur?.(event);
      },
      [onBlur],
    );
    return (
      <div
        className={classNames("st-react-input", {
          [className]: !!className,
        })}
      >
        <div
          className={classNames("st-react-input--container", {
            focus: isFocused,
            error,
            warning: !error && warning,
          })}
        >
          {leftAdornment && (
            <div className="st-react-input--adornment">{leftAdornment}</div>
          )}
          <input
            className={classNames("st-react-input--input", {
              [inputClassName]: !!inputClassName,
            })}
            ref={forwardedRef}
            {...inputProps}
            onFocus={focusCallback}
            onBlur={blurCallback}
          />
          {rightAdornment && (
            <div className="st-react-input--adornment">{rightAdornment}</div>
          )}
        </div>
      </div>
    );
  },
);
