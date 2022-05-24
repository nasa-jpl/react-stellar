import classNames from "classnames";
import React from "react";

export interface WarningProps {
  children: React.ReactNode;
}

export const Warning = ({ children }: WarningProps) => {
  return <div className={classNames("st-react-warning")}>{children}</div>;
};
