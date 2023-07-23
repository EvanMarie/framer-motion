import { ExampleOne, ExampleTwo } from "~/appComponents/intro/partOne";
import {
  Header,
  HorizontalStack,
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
            "'whileTap' specifies the animation to apply when the component is tapped.",
            "'drag' is used to enable dragging behavior on the component.",
            "'dragConstraints' defines the limits or constraints within which the component can be dragged. ",
          ]}
          textShadow="none"
          example={() => <ExampleOne />}
          markdown={() => <Example.Intro01 />}
        />

        <SectionContainer
          title="Motion"
          exampleNumber="2"
          description={["Description"]}
          textShadow="none"
          example={() => <ExampleTwo />}
          markdown={() => <Example.Intro02 />}
        />

        <HorizontalStack spacing="25px">
          <div>item one</div>
          <div>item two</div>
          <div>item three</div>
        </HorizontalStack>
      </div>
    </div>
  );
}
