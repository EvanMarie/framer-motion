```javascript
import { motion } from "framer-motion";
import { FaArrowsAltH } from "react-icons/fa";

export const ExampleOne = () => (
  <motion.div
    whileHover={{ scale: 1.2, cursor: "grab" }}
    whileTap={{ scale: 1.1 }}
    drag="x"
    dragConstraints={{ left: -100, right: 100 }}
    style={SmallPinkSquare}
  >
    <FaArrowsAltH color="black" size={49} />
  </motion.div>
);

export const SmallPinkSquare: MotionStyle = {
  width: 100,
  height: 100,
  background: "var(--pink)",
  borderRadius: "5px",
  boxShadow: "1px 1px 1px white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
```
