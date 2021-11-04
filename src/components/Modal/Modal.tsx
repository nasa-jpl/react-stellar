import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button, Close } from "index";
import classNames from "classnames";

export type ModalProps = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: string | React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
} & DialogPrimitive.DialogProps;

export const Modal = (props: ModalProps) => {
  const {
    title,
    description,
    children,
    trigger,
    className = "",
    ...modalProps
  } = props;

  return (
    <DialogPrimitive.Root {...modalProps}>
      <DialogPrimitive.Overlay className="st-react-modal--overlay" />
      <ModalContent className={className}>
        <div className="st-react-modal--header">
          <div className="st-react-modal--header--title-row">
            <ModalTitle asChild>
              <div className="st-react-modal--header--text st-typography-header">
                {title}
              </div>
            </ModalTitle>
            <DialogPrimitive.Close asChild>
              <Button variant="icon">
                <Close />
              </Button>
            </DialogPrimitive.Close>
          </div>
          <ModalDescription asChild>
            <div className="st-react-modal--description--text st-typography-body">
              {description}
            </div>
          </ModalDescription>
        </div>
        <div className="st-react-modal--content">{children}</div>
      </ModalContent>
      {trigger && <ModalTrigger asChild>{trigger}</ModalTrigger>}
    </DialogPrimitive.Root>
  );
};

export type ModalContentProps = {
  children?: string | React.ReactNode;
} & DialogPrimitive.DialogContentProps;

export const ModalContent = React.forwardRef(
  (props: ModalContentProps, forwardedRef) => {
    const { children, className = "", ...modalProps } = props;
    const modalClass = classNames({
      "st-react-modal": true,
      [className]: !!className,
    });
    return (
      <DialogPrimitive.Content
        // @ts-ignore
        ref={forwardedRef}
        className={modalClass}
        {...modalProps}
      >
        {children}
      </DialogPrimitive.Content>
    );
  }
);

export type ModalActionRowProps = {
  className?: string;
  children: React.ReactNode;
};

export const ModalActionRow = (props: ModalActionRowProps) => {
  const { children, className = "" } = props;
  const rootClass = classNames({
    "st-react-modal--action-row": true,
    [className]: !!className,
  });
  return <div className={rootClass}>{children}</div>;
};

export const ModalTrigger = DialogPrimitive.Trigger;
export const ModalClose = DialogPrimitive.Close;
export const ModalTitle = DialogPrimitive.Title;
export const ModalDescription = DialogPrimitive.Description;
