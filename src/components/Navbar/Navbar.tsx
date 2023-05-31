import { useCallback, useLayoutEffect, useState } from "react";
import classNames from "classnames";
import { IconClose, IconHamburger } from "components/Icons";
import { Button } from "components/Button";

type ReactJSXElement = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key: any;
};

export type NavbarMobileMenuProps = {
  children?: React.ReactNode;
  className?: string;
};

/**
 * [Figma Link](TODO)
 */
export const NavbarMobileMenu = (props: NavbarMobileMenuProps) => {
  const { children, className = "" } = props;

  const navbarMobileMenuClass = classNames({
    "st-react-navbar-mobile-menu": true,
    [className]: !!className,
  });
  return <div className={navbarMobileMenuClass}>{children}</div>;
};

type NavbarContentProps = {
  full?: boolean;
  children?: React.ReactNode;
  align?: "left" | "right" | "center";
  responsiveBreakpointMin?: number;
  responsiveBreakpointMax?: number;
  className?: string;
};

/**
 * [Figma Link](TODO)
 */
export const NavbarContent = (props: NavbarContentProps) => {
  const { children, align = "left", full = false, className = "" } = props;

  const navbarContentClass = classNames("st-react-navbar-content", {
    "st-react-navbar-content--full": full,
    "st-react-navbar-content--align-left": align === "left",
    "st-react-navbar-content--align-right": align === "right",
    "st-react-navbar-content--align-center": align === "center",
    [className]: !!className,
  });
  return <div className={navbarContentClass}>{children}</div>;
};

export type NavbarLinkProps = {
  active?: boolean;
  href?: string;
  className?: string;
  children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * [Figma Link](TODO)
 */
export const NavbarLink = (props: NavbarLinkProps) => {
  const {
    children,
    active = false,
    href = "",
    className = "",
    ...other
  } = props;

  const navbarLinkClass = classNames({
    "st-react-navbar-link": true,
    "st-react-navbar-link--active": active,
    [className]: !!className,
  });
  return (
    <a href={href} className={navbarLinkClass} {...other}>
      {children}
    </a>
  );
};

export type NavbarBrandProps = {
  logo?: React.ReactNode;
  title?: React.ReactNode;
  version?: React.ReactNode;
  className?: string;
};

/**
 * [Figma Link](TODO)
 */
export const NavbarBrand = (props: NavbarBrandProps) => {
  const { logo, title, version, className = "" } = props;

  const navbarBrandClass = classNames({
    "st-react-navbar-brand": true,
    [className]: !!className,
  });
  return (
    <div className={navbarBrandClass}>
      {logo && <div className="st-react-navbar-brand--logo">{logo}</div>}
      {title && (
        <div className="st-react-navbar-brand--title">
          {title}
          {version && (
            <div className="st-react-navbar-brand--version">{version}</div>
          )}
        </div>
      )}
    </div>
  );
};

export type NavbarProps = {
  children?: React.ReactNode[];
  enableMobileMenu?: boolean;
  mobileBreakpoint?: number;
  mobileMenuPosition?: "left" | "right";
  className?: string;
};

/** A component that appears at the top of an app screen to help users navigate through the application content and access
 * global functionality. The react-stellar Navbar is designed to be composed to suit different needs and provides solutions
 * for responsive content rendering.
 *
 * [Figma Link](TODO)
 */
export const Navbar = (props: NavbarProps) => {
  const {
    children,
    enableMobileMenu = true,
    mobileBreakpoint = 800,
    mobileMenuPosition = "left",
    className = "",
  } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const toggleMobileMenuOpen = () => setMobileMenuOpen(!mobileMenuOpen);

  const showMobileMenu =
    enableMobileMenu && document.body.clientWidth < mobileBreakpoint;

  const navbarClass = classNames({
    "st-react-navbar": true,
    "st-react-navbar--mobile": showMobileMenu,
    [className]: !!className,
  });

  const handleResize = useCallback(() => {
    setClientWidth(document.body.clientWidth);
    if (mobileMenuOpen && document.body.clientWidth >= mobileBreakpoint) {
      setMobileMenuOpen(false);
    }
  }, [clientWidth]);
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const visibleChildren: React.ReactNode[] = [];
  let mobileMenu;
  let hasLeftContent = false;
  let hasRightContent = false;
  ((children as ReactJSXElement[]) || []).forEach((child) => {
    if (child.type.displayName === NavbarMobileMenu.name) {
      // Pull out the mobile menu as we will render it separately
      mobileMenu = child;

      // Detect left and right content
      if (mobileMenuPosition === "left") {
        hasLeftContent = showMobileMenu && mobileMenuPosition === "left";
      }
      if (mobileMenuPosition === "right") {
        hasRightContent = showMobileMenu && mobileMenuPosition === "right";
      }
    } else if (child.type.displayName === NavbarContent.name) {
      // Enforce min and max breakpoints
      const childProps = child.props as NavbarContentProps;
      if (
        !(
          (typeof childProps.responsiveBreakpointMin === "number" &&
            clientWidth <= childProps.responsiveBreakpointMin) ||
          (typeof childProps.responsiveBreakpointMax === "number" &&
            clientWidth > childProps.responsiveBreakpointMax)
        )
      ) {
        visibleChildren.push(child);

        // Detect left and right content
        if (childProps.align === "left") hasLeftContent = true;
        if (childProps.align === "right") hasRightContent = true;
      }
    } else {
      visibleChildren.push(child);
    }
  });

  const mobileMenuComponent = showMobileMenu && (
    <>
      <Button variant="icon" onClick={toggleMobileMenuOpen}>
        {!mobileMenuOpen ? <IconHamburger /> : <IconClose />}
      </Button>
    </>
  );

  const mobileMenuSpacer = showMobileMenu && (
    <div className="st-react-navbar--mobile-spacer" />
  );

  return (
    <>
      <div className={navbarClass}>
        {mobileMenuPosition === "left" && mobileMenuComponent}
        {!hasLeftContent && mobileMenuSpacer}
        {visibleChildren}
        {mobileMenuPosition === "right" && mobileMenuComponent}
        {!hasRightContent && mobileMenuSpacer}
      </div>
      {showMobileMenu && mobileMenuOpen && mobileMenu}
    </>
  );
};
