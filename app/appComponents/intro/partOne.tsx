import { motion } from "framer-motion";
import { SmallCyanSquare, SmallPinkSquare } from "~/styles/individualStyles";
import { FaArrowsAltH } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { useState } from "react";
import { Slider } from "../functionalComponents";
import { FlexContainer, VerticalStack } from "~/styles/designComponents";

/* ******************************************************************* */

export function ExampleOne() {
  return (
    <motion.div
      whileHover={{ scale: 1.2, cursor: "grab" }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      style={SmallPinkSquare}
    >
      <FaArrowsAltH color="black" size={49} />
      <p style={{ color: "black" }}>Drag me</p>
    </motion.div>
  );
}

/* ******************************************************************* */

export function ExampleTwo() {
  const [x] = useState(0);
  const [y] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <VerticalStack>
      <FlexContainer height="150px">
        <motion.div
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
          style={SmallCyanSquare}
        >
          <BsEmojiSmile color="black" size={49} />
          <p style={{ color: "black" }}>Spin me</p>
        </motion.div>
      </FlexContainer>
      <div>
        {/* <Slider value={x} set={setX}>
          x
        </Slider>
        <Slider value={y} set={setY}>
          y
        </Slider> */}
        <Slider value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Slider>
      </div>
    </VerticalStack>
  );
}
