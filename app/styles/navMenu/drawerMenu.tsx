import React from "react";
import { FaWindowClose } from "react-icons/fa";

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
    width: "100%",
    maxWidth: "400px",
    height: "100vh",
    background: "var(--medGrayTransparent)", // Provide a valid background value
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
    backdropFilter: "blur(3px)", // Apply blur only to the overlay
    zIndex: 999,
    display: isOpen ? "block" : "none",
  };

  return (
    <>
      <div style={drawerStyles}>
        <div style={drawerContentStyles}>
          <FaWindowClose
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              cursor: "pointer",
            }}
            onClick={onClose}
            color="var(--blue)"
            size={30}
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
