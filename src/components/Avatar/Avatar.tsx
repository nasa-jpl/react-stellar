import classNames from "classnames";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export type AvatarProps = {
  src?: string;
  text?: string;
  size?: "medium" | "large";
  className?: string;
} & AlertDialog.DialogProps;

/** An image element with a fallback for representing the user.
 *
 * Built using Radix Avatar, styled for Stellar. Refer to the Radix docs for complete documentation of available properties aside from the ones
 * added by this wrapper component.
 *
 * Figma Docs TODO
 * [Radix Docs](https://www.radix-ui.com/docs/primitives/components/avatar)
 */
export const Avatar = (props: AvatarProps) => {
  const { src, text, size = "medium", className = "" } = props;

  const rootClasses = classNames("st-react-avatar", className, {
    large: size === "large",
  });

  return (
    <AvatarPrimitive.Root className={rootClasses}>
      <AvatarPrimitive.Image
        className="st-react-avatar--image"
        src={src}
        alt={text}
      />
      <AvatarPrimitive.Fallback
        className="st-react-avatar--fallback"
        delayMs={src ? 600 : 0}
      >
        {text}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
