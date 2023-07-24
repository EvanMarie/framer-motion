import { useState } from "react";
import Drawer from "./drawerMenu";
import { Link } from "@remix-run/react";
import { CgMenuBoxed } from "react-icons/cg";
import DrawerPortal from "./drawerPortal";

export default function NavMenu() {
  const [isDrawerOpen, setIsDrawerOpen] =
    useState(false);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const navMenuItems = [
    { id: 1, name: "Main", link: "/" },
    {
      id: 2,
      name: "Introduction",
      link: "/intro",
    },
    {
      id: 3,
      name: "Example Pages",
      link: "/pages",
    },
    // { id: 4, name: "Item 4", link: "/" },
  ];

  const openMenuStyles = {
    color: "var(--navMenuColor)",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
      }}
    >
      <div
        onClick={handleOpenDrawer}
        style={openMenuStyles}
      >
        <CgMenuBoxed
          size={44}
          style={openMenuStyles}
        />
      </div>
      <DrawerPortal>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
        >
          <ul style={{ listStyleType: "none" }}>
            {navMenuItems.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                onClick={handleCloseDrawer}
              >
                <li className="navBarMenuItem">
                  {item.name}
                </li>
              </Link>
            ))}
            {/* Add more menu items as needed */}
          </ul>
        </Drawer>
      </DrawerPortal>
    </div>
  );
}
