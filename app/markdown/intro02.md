```javascript
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
        </motion.div>
      </FlexContainer>
      <div>
        <Slider value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Slider>
      </div>
    </VerticalStack>
  );
}

export const SmallCyanSquare: MotionStyle = {
  width: 100,
  height: 100,
  borderRadius: "5px",
  boxShadow: "1px 1px 1px white",
  border: "2px solid white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  background: "var(--blue)",
};
```
