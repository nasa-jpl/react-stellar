import React from "react";
import classNames from "classnames";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

// For documentation of complete Radix Tooltip props see https://www.radix-ui.com/docs/primitives/components/tooltip
export type TooltipProps = {
  content?: React.ReactNode;
  arrowWidth?: number;
  arrowHeight?: number;
  className?: string;
  contentProps?: TooltipPrimitive.TooltipContentProps;
} & TooltipPrimitive.TooltipProps;

export const Tooltip = (props: TooltipProps) => {
  const {
    children,
    content,
    open,
    defaultOpen,
    onOpenChange,
    className = "",
    contentProps = {},
    arrowWidth = 11,
    arrowHeight = 5,
    ...otherTooltipProps
  } = props;

  const contentClass = classNames({
    "st-react-tooltip": true,
    "st-typography-body": true,
    [className]: !!className,
  });
  const { sideOffset = 4, ...otherContentProps } = contentProps;

  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      {...otherTooltipProps}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        side="top"
        align="center"
        className={contentClass}
        sideOffset={sideOffset}
        {...otherContentProps}
      >
        {content}
        <TooltipPrimitive.Arrow
          width={arrowWidth}
          height={arrowHeight}
          className="st-react-tooltip--arrow"
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};
