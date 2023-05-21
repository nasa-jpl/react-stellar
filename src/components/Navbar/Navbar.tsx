import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import classNames from "classnames";
import { IconClose, IconHamburger } from "components/Icons";
import { Button } from "components/Button";

type ReactJSXElement = {
  type: any;
  props: any;
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
  icon?: React.ReactNode;
  title?: React.ReactNode;
  version?: React.ReactNode;
  className?: string;
};

/**
 * [Figma Link](TODO)
 */
export const NavbarBrand = (props: NavbarBrandProps) => {
  const { icon, title, version, className = "" } = props;

  const navbarBrandClass = classNames({
    "st-react-navbar-brand": true,
    [className]: !!className,
  });
  return (
    <div className={navbarBrandClass}>
      {icon && <div className="st-react-navbar-brand--icon">{icon}</div>}
      {title && <div className="st-react-navbar-brand--title">{title}</div>}
      {version && (
        <div className="st-react-navbar-brand--version">{version}</div>
      )}
    </div>
  );
};

export type NavbarProps = {
  children?: React.ReactNode[];
  enableMobileMenu?: boolean;
  mobileBreakPoint?: number;
  mobileMenuPosition?: "left" | "right";
  className?: string;
};

/**
 * [Figma Link](TODO)
 */
export const Navbar = (props: NavbarProps) => {
  const {
    children,
    enableMobileMenu = true,
    mobileBreakPoint = 800,
    mobileMenuPosition = "left",
    className = "",
  } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clientWidth, setClientWidth] = useState(document.body.clientWidth);
  const toggleMobileMenuOpen = () => setMobileMenuOpen(!mobileMenuOpen);

  const showMobileMenu =
    enableMobileMenu && document.body.clientWidth < mobileBreakPoint;

  const navbarClass = classNames({
    "st-react-navbar": true,
    "st-react-navbar--mobile": showMobileMenu,
    [className]: !!className,
  });

  const handleResize = useCallback(() => {
    setClientWidth(document.body.clientWidth);
    if (mobileMenuOpen && document.body.clientWidth >= mobileBreakPoint) {
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
  ((children as ReactJSXElement[]) || []).forEach((child) => {
    if (child.type.displayName === NavbarMobileMenu.name) {
      // Pull out the mobile menu as we will render it separately
      mobileMenu = child;
    } else if (child.type.displayName === NavbarContent.name) {
      // Enforce min and max breakpoints
      if (
        !(
          (typeof child.props.responsiveBreakpointMin === "number" &&
            clientWidth < child.props.responsiveBreakpointMin) ||
          (typeof child.props.responsiveBreakpointMax === "number" &&
            clientWidth > child.props.responsiveBreakpointMax)
        )
      ) {
        visibleChildren.push(child);
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

  return (
    <>
      <div className={navbarClass}>
        {mobileMenuPosition === "left" && mobileMenuComponent}
        {visibleChildren}
        {mobileMenuPosition === "right" && mobileMenuComponent}
      </div>
      {showMobileMenu && mobileMenuOpen && mobileMenu}
    </>
  );
};
