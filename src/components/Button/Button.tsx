import React from "react";
import classNames from "classnames";

export type ButtonProps = {
  children?: string | React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "icon";
  className?: string;
  type?: "button" | "submit" | "reset";
  theme?: "light" | "dark";
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const {
    children,
    variant = "primary",
    type = "button",
    theme = "light",
    onClick,
    icon,
    disabled = false,
    className = "",
    ...other
  } = props;
  const buttonClass = classNames({
    button: true,
    "button--primary": variant === "primary",
    "button--secondary": variant === "secondary",
    "button--icon": variant === "icon",
    "button--no-text": !children,
    "button--dark": theme === "dark",
    "button--light": theme === "light",
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
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
