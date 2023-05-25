import { StoryObj, Meta } from "@storybook/react";
import { Avatar } from "components/Avatar";
import { Button } from "components/Button";
import { IconArrowRight, IconChevronDown, IconSol } from "components/Icons";
import { Menu, MenuItem, MenuLabel, MenuRightSlot } from "components/Menu";
import * as NavbarPrimitive from "components/Navbar";

export default { component: NavbarPrimitive.Navbar } as Meta<
  typeof NavbarPrimitive.Navbar
>;
type Story = StoryObj<typeof NavbarPrimitive.Navbar>;

const navigationLinks = [
  <NavbarPrimitive.NavbarLink key="1" href="#">
    Page 1
  </NavbarPrimitive.NavbarLink>,
  <NavbarPrimitive.NavbarLink key="2" href="#">
    Page 2
  </NavbarPrimitive.NavbarLink>,
  <NavbarPrimitive.NavbarLink key="3" href="#" active>
    Page 3
  </NavbarPrimitive.NavbarLink>,
];

const mobileNavigationLinks = navigationLinks.concat(
  <NavbarPrimitive.NavbarLink key="4" href="#">
    Logout
  </NavbarPrimitive.NavbarLink>,
);

export const Primary: Story = {
  render: (args) => {
    return (
      <NavbarPrimitive.Navbar {...args}>
        <NavbarPrimitive.NavbarContent responsiveBreakpointMin={800}>
          <NavbarPrimitive.NavbarBrand
            title="Stellar"
            version="1.0.0"
            icon={<IconSol />}
          />
        </NavbarPrimitive.NavbarContent>
        {/* TODO some option / functionality to ensure that "center" is actually in the center */}
        <NavbarPrimitive.NavbarContent
          full
          align="center"
          responsiveBreakpointMax={800}
        >
          <NavbarPrimitive.NavbarBrand title="Stellar" icon={<IconSol />} />
        </NavbarPrimitive.NavbarContent>
        <NavbarPrimitive.NavbarContent responsiveBreakpointMin={800}>
          {navigationLinks}
        </NavbarPrimitive.NavbarContent>
        <NavbarPrimitive.NavbarContent
          full
          align="right"
          responsiveBreakpointMin={800}
        >
          <div
            style={{
              display: "flex",
              gap: "var(--st-grid-unit2x)",
              alignItems: "center",
            }}
          >
            <Button key="1" variant="secondary">
              Action 1
            </Button>
            <Button key="2">Action 2</Button>
            <Menu
              {...args}
              trigger={
                <Button
                  size="large"
                  variant="tertiary"
                  style={{ padding: "0 var(--st-grid-unit)", gap: "4px" }}
                >
                  <Avatar text="K" />
                  <IconChevronDown />
                </Button>
              }
            >
              <MenuLabel>Welcome kjaneway</MenuLabel>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem>
                Logout
                <MenuRightSlot>
                  <IconArrowRight />
                </MenuRightSlot>
              </MenuItem>
            </Menu>
          </div>
        </NavbarPrimitive.NavbarContent>
        <NavbarPrimitive.NavbarMobileMenu>
          {mobileNavigationLinks}
        </NavbarPrimitive.NavbarMobileMenu>
      </NavbarPrimitive.Navbar>
    );
  },
};
