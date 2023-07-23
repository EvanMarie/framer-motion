import hljs from "highlight.js";
import { useEffect, useRef } from "react";
import styles from "../../node_modules/highlight.js/styles/atom-one-dark.css";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function Highlighter({
  language = "javascript",
  style = {},

  children,
}: {
  language?: string;
  style?: object;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = hljs.highlight(String(children), {
        language,
        ignoreIllegals: true,
      }).value;
    }
  }, []);
  return (
    <div className="syntax-container">
      <pre data-syntax={language}>
        <code ref={ref} className={`hljs language-${language}`} style={style} />
      </pre>
    </div>
  );
}
