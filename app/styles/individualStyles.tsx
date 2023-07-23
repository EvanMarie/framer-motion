import { MotionStyle } from "framer-motion";

export const SmallPinkSquare: MotionStyle = {
  width: 100,
  height: 100,
  background: "var(--pink)",
  borderRadius: "5px",
  boxShadow: "1px 1px 1px white",
  border: "2px solid white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const SmallCyanSquare: MotionStyle = {
  ...SmallPinkSquare,
  background: "var(--blue)",
};
