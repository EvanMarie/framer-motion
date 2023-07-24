import { MotionStyle } from "framer-motion";

export const SmallPinkSquare: MotionStyle = {
  width: 100,
  height: 100,
  background: "var(--pink)",
  borderRadius: "5px",
  boxShadow: "var(--mediumShadowBlack)",
  border: "2px solid var(--creme)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const SmallCyanSquare: MotionStyle = {
  ...SmallPinkSquare,
  background: "var(--blue)",
};

export const SmallOrangeSquare: MotionStyle = {
  ...SmallPinkSquare,
  background: "var(--orange)",
  border: "2px solid var(--darkGray)",
  boxShadow: "var(--largeShadowBlack)",
};
