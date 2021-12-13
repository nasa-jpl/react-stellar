import React from "react";
import classNames from "classnames";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export type TooltipProps = {
  label?: string;
  labelPosition?: "left" | "right";
  content?: React.ReactNode;
  className?: string;
  disabled?: boolean;
} & TooltipPrimitive.TooltipProps;

export const Tooltip = (props: TooltipProps) => {
  const {
    children,
    content,
    open,
    defaultOpen,
    onOpenChange,
    className = "",
    ...tooltipProps
  } = props;

  const contentClass = classNames({
    "st-react-tooltip": true,
    "st-typography-body": true,
    [className]: !!className,
  });

  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        side="top"
        align="center"
        className={contentClass}
        {...tooltipProps}
      >
        {content}
        <TooltipPrimitive.Arrow offset={5} width={11} height={5} className="st-react-tooltip--arrow" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};
