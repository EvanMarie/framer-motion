import { motion } from "framer-motion";
import { SmallPinkSquare } from "~/styles/individualStyles";

export const ExampleOne = () => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 1.1 }}
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
    style={SmallPinkSquare}
  />
);
