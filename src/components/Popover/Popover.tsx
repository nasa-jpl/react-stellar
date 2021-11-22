import React from "react";
import classNames from "classnames";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

export type PopoverProps = {
  children?: string | React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
  contentProps?: PopoverPrimitive.PopoverContentProps;
} & PopoverPrimitive.PopoverProps;

export const Popover = (props: PopoverProps) => {
  const {
    children,
    trigger,
    className = "",
    contentProps,
    ...popoverProps
  } = props;

  return (
    <PopoverPrimitive.Root {...popoverProps}>
      <PopoverContent className={className} {...contentProps}>
        {children}
      </PopoverContent>
      {trigger && <PopoverTrigger asChild>{trigger}</PopoverTrigger>}
    </PopoverPrimitive.Root>
  );
};

export type PopoverContentProps = {
  className?: string;
  children?: React.ReactNode;
} & PopoverPrimitive.PopoverContentProps;

export const PopoverContent = React.forwardRef(
  (props: PopoverContentProps, forwardedRef) => {
    const { children, className = "", ...popoverContentProps } = props;
    const popoverContentClass = classNames({
      "st-react-popover": true,
      [className]: !!className,
    });
    return (
      <PopoverPrimitive.Content
        className={popoverContentClass}
        sideOffset={8}
        // @ts-ignore
        ref={forwardedRef}
        {...popoverContentProps}
      >
        {children}
        {/* <PopoverPrimitive.Arrow /> */}
      </PopoverPrimitive.Content>
    );
  }
);
