import React, { useEffect } from "react";

const useGistScript = (gistScriptUrl: string) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = gistScriptUrl;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [gistScriptUrl]);
};

export default useGistScript;

interface HeaderProps {
  exampleNumber?: string; // New prop for the example number
  title?: string;
  subtitle?: string;
  titleSize?: string;
  subtitleSize?: string;
  textShadow?: string;
  titleColor?: string;
  subtitleColor?: string;
}

export function Header({
  exampleNumber, // Destructure the exampleNumber prop
  title,
  subtitle,
  titleSize = "2.5rem",
  subtitleSize = "1.5rem",
  textShadow = "var(--smallShadowWhite)",
  titleColor = "var(--yellow)",
  subtitleColor = "var(--orange)",
}: HeaderProps) {
  return (
    <div className="headingContainer">
      {exampleNumber && (
        <div style={{ width: "100%", display: "flex", textAlign: "center" }}>
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: 500,
              color: "var(--pink)", // You can change the color as per your design
              margin: "auto", // Center the content horizontally
            }}
          >
            ex. {exampleNumber}
          </h3>
        </div>
      )}
      <h1
        style={{
          fontSize: titleSize,
          textShadow: textShadow,
          color: titleColor,
        }}
      >
        {title}
      </h1>
      <h2
        style={{
          fontSize: subtitleSize,
          color: subtitleColor,
          fontWeight: 400,
          padding: "0 0 0 1rem",
        }}
      >
        {subtitle}
      </h2>
    </div>
  );
}

/* ******************************************************************* */

interface BreakProps {
  height: string;
}

export function Break({ height = "10px" }: BreakProps) {
  return <div style={{ height: height, width: "100%" }} />;
}

/* ******************************************************************* */

interface SectionContainerProps {
  title?: string;
  exampleNumber?: string;
  description?: string;
  children?: React.ReactNode;
  textShadow?: string;
}

export function SectionContainer({
  title,
  exampleNumber,
  description,
  children,
  textShadow = "none",
}: SectionContainerProps) {
  return (
    <div className="sectionContainer">
      <Header
        title={title}
        subtitle={description}
        textShadow={textShadow}
        exampleNumber={exampleNumber}
      />

      {children}
    </div>
  );
}
