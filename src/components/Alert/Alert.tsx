import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import classNames from "classnames";
import { ModalActionRow } from "components/Modal";

export type ActionContentProps = {
  children?: string | React.ReactNode;
} & AlertDialog.DialogContentProps;

export const AlertContent = React.forwardRef(
  (props: ActionContentProps, forwardedRef) => {
    const { children, className = "", ...alertProps } = props;
    const modalClass = classNames({
      "st-react-modal": true,
      "st-react-alert": true,
      [className]: !!className,
    });
    return (
      <AlertDialog.Content
        // @ts-ignore
        ref={forwardedRef}
        className={modalClass}
        {...alertProps}
      >
        {children}
      </AlertDialog.Content>
    );
  },
);

export const AlertTrigger = AlertDialog.Trigger;
export const AlertTitle = AlertDialog.Title;
export const AlertDescription = AlertDialog.Description;
export const AlertCancel = AlertDialog.Cancel;
export const AlertAction = AlertDialog.Action;

export type AlertProps = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: string | React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
} & AlertDialog.DialogProps;

export const Alert = (props: AlertProps) => {
  const {
    title,
    description,
    children,
    trigger,
    className = "",
    ...alertProps
  } = props;

  return (
    <AlertDialog.Root {...alertProps}>
      <AlertDialog.Overlay className="st-react-modal--overlay" />
      <AlertContent className={className}>
        <div className="st-react-modal--header">
          <div className="st-react-modal--header--title-row">
            <AlertTitle asChild>
              <div className="st-react-modal--header--text st-typography-header">
                {title}
              </div>
            </AlertTitle>
          </div>
        </div>
        <div className="st-react-modal--content">
          <AlertDescription asChild>
            <div className="st-react-modal--description--text st-typography-body">
              {description}
            </div>
          </AlertDescription>
        </div>
        <ModalActionRow>{children}</ModalActionRow>
      </AlertContent>
      {trigger && <AlertTrigger asChild>{trigger}</AlertTrigger>}
    </AlertDialog.Root>
  );
};
