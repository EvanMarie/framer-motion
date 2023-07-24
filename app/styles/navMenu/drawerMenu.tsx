import React from "react";
import { CgCloseR } from "react-icons/cg";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Drawer({
  isOpen,
  onClose,
  children,
}: DrawerProps) {
  // Add your styling here for the drawer
  const drawerStyles: React.CSSProperties = {
    position: "fixed",
    paddingTop: "40px",
    top: 0,
    right: isOpen ? "0" : "-100%", // Slide in from the right
    height: "100vh",
    background: "var(--medTealTransparent)", // Provide a valid background value
    boxShadow: "var(--smallShadowBlack)",
    transition: "right 0.4s ease-in-out", // Add back the transition for sliding animation
    zIndex: 1000,
  };

  const drawerContentStyles: React.CSSProperties =
    {
      height: "100%", // Take full height // Add padding as needed
    };

  const overlayStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
    zIndex: 999,
    display: isOpen ? "block" : "none",
  };

  return (
    <>
      <div
        className="navMenu"
        style={drawerStyles}
      >
        <div style={drawerContentStyles}>
          <CgCloseR
            className="navMenuCloseButton"
            size="30px"
            onClick={onClose}
            style={{
              position: "absolute",
              top: "5px",
              left: "5px",
              cursor: "pointer",
              color: "var(--blue)",
            }}
          />
          {children}
        </div>
      </div>

      <div
        style={overlayStyles}
        onClick={onClose}
      />
    </>
  );
}

export default Drawer;
