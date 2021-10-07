import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "contexts/theme/theme";

export type ButtonProps = {
  children?: string | React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "icon";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "primary",
    type = "button",
    onClick,
    icon,
    disabled = false,
    className = "",
    ...other
  } = props;
  const theme = useContext(ThemeContext);

  const buttonClass = classNames({
    "stellar-button": true,
    "stellar-button--primary": variant === "primary",
    "stellar-button--secondary": variant === "secondary",
    "stellar-button--icon": variant === "icon", // TODO implement icon left and right once design settles
    "stellar-button--no-text": !children,
    [`stellar-button--${theme}`]: true,
    [className]: !!className,
  });
  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonClass}
      disabled={disabled}
      {...other}
    >
      {icon && icon}
      {children}
    </button>
  );
};
