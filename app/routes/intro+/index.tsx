import { ExampleOne } from "~/appComponents/intro/partOne";
import { Header, SectionContainer } from "~/styles/designComponents";

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
          description="<motion /> enhances React's event system with robust gesture recognition capabilities, allowing it to handle hover, tap, pan, and drag interactions effectively."
          textShadow="none"
        >
          <ExampleOne />
          <div className="codeContainer">
            <Example.E01 />
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
