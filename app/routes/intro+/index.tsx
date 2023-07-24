import {
  ExampleFour,
  ExampleOne,
  ExampleThree,
  ExampleTwo,
} from "~/routes/intro+/partOne";
import {
  Header,
  SectionContainer,
} from "~/styles/designComponents";
import * as Example from "~/markdown/index";

// import hljs from "highlight.js";
// import styles from "~/styles/codeMarkdown.css";
// import javascript from "highlight.js/lib/languages/javascript";
// import { LinksFunction } from "@remix-run/node";
// hljs.registerLanguage("javascript", javascript);
// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Intro() {
  return (
    <div className="bigContainer">
      <div className="contentContainer">
        <Header
          title="Introduction"
          titleSize="3rem"
          textShadow="var(--smallShadowBlack)"
          titleColor="var(--green)"
        />

        <SectionContainer
          title="Moving along x axis"
          exampleNumber="1"
          description={[
            "whileHover specifies the animation to apply when the mouse cursor hovers over the component.",
            "whileTap specifies the animation to apply when the component is tapped.",
            "drag is used to enable dragging behavior on the component.",
            "dragConstraints defines the limits or constraints within which the component can be dragged. ",
          ]}
          wordsToHighlight={[
            "whileHover",
            "whileTap",
            "drag",
            "dragConstraints",
          ]}
          example={() => <ExampleOne />}
          markdown={() => <Example.Intro01 />}
        />

        <SectionContainer
          title="Rotation"
          exampleNumber="2"
          description={[
            "animate is used to define the targets for the element. ",
            "transition defines the type used for the animation. In this case, it is set to 'spring', which will create a smooth bouncing animation effect.",
          ]}
          wordsToHighlight={[
            "animate",
            "transition",
            "spring",
          ]}
          example={() => <ExampleTwo />}
          markdown={() => <Example.Intro02 />}
        />

        <SectionContainer
          title="Transition Options"
          exampleNumber="3"
          description={[
            "spring: Creates a bounce-based animation effect, where the element moves with a bouncing motion, similar to a physical springing motion. It is often used for smooth and natural animations.",
            "tween: This is the default transition style if not explicitly specified. It creates a smooth animation from the starting point to the target point. It's a simple easing animation that doesn't have any bounce or overshoot.",
            "inertia: Applies a smooth transition to mimic the movement of the element when it comes to a stop. It's often used with drag or swipe gestures to create a natural deceleration effect.",
            "keyframes: Allows you to define multiple frames with different properties and timings, creating more complex animations with multiple steps or pauses.",
            "just: Creates an immediate transition with no animation. This is useful for instant state changes.",
            "linear: Similar to tween, it creates a transition from the starting point to the target point without any easing effect.",
            "easeIn, easeOut, and easeInOut: These provide different easing functions to control the acceleration and deceleration of the animation. easeIn starts slow and speeds up, easeOut starts fast and slows down, and easeInOut combines both easing styles.",
            "anticipate: A transition style that creates an anticipation effect by overshooting the target value and then moving back to it.",
            "Custom Easing Functions: Apart from the built-in easing options, you can also define your own custom easing functions using cubic-bezier, steps, or other methods available in the transition property.",
          ]}
          wordsToHighlight={[
            "spring",
            "tween",
            "inertia",
            "keyframes",
            "just",
            "linear",
            "easeIn",
            "easeOut",
            "easeInOut",
            "anticipate",
            "Custom Easing Functions",
          ]}
          example={() => <ExampleThree />}
          markdown={() => <Example.Intro02 />}
        />

        <SectionContainer
          title="Transition Options"
          exampleNumber="4"
          description={[""]}
          wordsToHighlight={[""]}
          example={() => <ExampleFour />}
          markdown={() => <Example.Intro02 />}
        />
      </div>
    </div>
  );
}
