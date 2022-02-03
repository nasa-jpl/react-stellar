import classNames from "classnames";
import React from "react";

export interface ErrorProps {
  children: React.ReactNode;
}

export const Error = ({ children }: ErrorProps) => {
  return <div className={classNames("st-react-error")}>{children}</div>;
};
