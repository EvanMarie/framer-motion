import { useState } from "react";
import Drawer from "./drawerMenu";
import { NavBarItem } from "~/styles/styleSpecs";
import { Link } from "@remix-run/react";

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
    // { id: 3, name: "Item 3", link: "/" },
    // { id: 4, name: "Item 4", link: "/" },
  ];

  return (
    <div>
      <button onClick={handleOpenDrawer}>
        Open Drawer
      </button>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      >
        <ul>
          {navMenuItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <NavBarItem>{item.name}</NavBarItem>
            </Link>
          ))}
          <NavBarItem> Item 1</NavBarItem>
          <NavBarItem>Menu Item 2</NavBarItem>
          <NavBarItem>Menu Item 3</NavBarItem>
          {/* Add more menu items as needed */}
        </ul>
      </Drawer>
    </div>
  );
}
