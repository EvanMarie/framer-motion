import { motion } from "framer-motion";
import {
  SmallCyanSquare,
  SmallOrangeSquare,
  SmallPinkSquare,
} from "~/styles/individualStyles";
import { FaArrowsAltH } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { ChangeEvent, useState } from "react";
import { Slider } from "../functionalComponents";
import {
  Collapsible,
  FlexContainer,
  VerticalStack,
} from "~/styles/designComponents";

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
          <p style={{ color: "black" }}>
            Spin me
          </p>
        </motion.div>
      </FlexContainer>
      <div>
        {/* <Slider value={x} set={setX}>
          x
        </Slider>
        <Slider value={y} set={setY}>
          y
        </Slider> */}
        <Slider
          value={rotate}
          set={setRotate}
          min={-180}
          max={180}
        >
          rotate
        </Slider>
      </div>
    </VerticalStack>
  );
}

/* ******************************************************************* */

export function ExampleThree() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [
    selectedTransition,
    setSelectedTransition,
  ] = useState("spring");

  const handleTransitionChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTransition(e.target.value);
  };

  const transitionOptions = [
    "spring",
    "tween",
    "keyframes",
    "just",
    "linear",
    "easeIn",
    "easeOut",
    "easeInOut",
    "anticipate",
    // Add any other transition styles you want to include here
  ];

  return (
    <VerticalStack>
      <FlexContainer
        height="350px"
        bg="var(--medLightGray)"
        border="2px solid var(--darkGray)"
        box-shadow="var(--mediumShadowWhite)"
        align="center"
        borderRadius="5px"
        justify="center"
      >
        <motion.div
          animate={{
            x,
            y,
            rotate,
            backgroundColor: "var(--orange)",
          }}
          transition={{
            type: selectedTransition,
          }}
          style={{
            ...SmallOrangeSquare,
            originX: 0.5,
            originY: 0.5,
          }}
        />
      </FlexContainer>
      <VerticalStack>
        <Collapsible>
          <FlexContainer
            direction="row"
            width="fit-content"
          >
            <label htmlFor="transitionSelect">
              <code
                style={{
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              >
                Transition:
              </code>
            </label>
            <select
              id="transitionSelect"
              value={selectedTransition}
              onChange={handleTransitionChange}
            >
              {transitionOptions.map((option) => (
                <option
                  key={option}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </FlexContainer>

          <Slider
            value={rotate}
            set={setRotate}
            min={-180}
            max={180}
          >
            Rotation
          </Slider>
        </Collapsible>
        <Collapsible>
          <Slider
            value={x}
            set={setX}
            min={-100}
            max={100}
          >
            x
          </Slider>
          <Slider
            value={y}
            set={setY}
            min={-100}
            max={100}
          >
            y
          </Slider>
        </Collapsible>
      </VerticalStack>
    </VerticalStack>
  );
}

export function ExampleFour() {
  return <div>Example Four</div>;
}
