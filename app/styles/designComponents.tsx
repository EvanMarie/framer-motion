import type { HTMLAttributes } from "react";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { DiCode } from "react-icons/di";

/* ******************************************************************* */

interface HeaderProps {
  title?: string;
  subtitle?: string;
  titleSize?: string;
  subtitleSize?: string;
  textShadow?: string;
  titleColor?: string;
  subtitleColor?: string;
}

export function Header({
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
  height?: string;
}

export function Break({
  height = "10px",
}: BreakProps) {
  return (
    <div
      style={{ height: height, width: "100%" }}
    />
  );
}

/* ******************************************************************* */

interface SectionContainerProps {
  title?: string;
  titleSize?: string;
  titleColor?: string;
  exampleNumber?: string;
  description?: string[]; // Modify the prop to accept an array of strings
  children?: React.ReactNode;
  textShadow?: string;
  markdown?: () => JSX.Element;
  example?: () => JSX.Element;
  wordsToHighlight?: string[]; // Add the wordsToColor prop
}

export function SectionContainer({
  title,
  titleSize = "2.5rem",
  titleColor = "var(--yellow)",
  exampleNumber,
  description,
  children,
  markdown,
  example,
  textShadow = "none",
  wordsToHighlight = [], // Default to an empty array if not provided
}: SectionContainerProps) {
  return (
    <div className="sectionContainer">
      <div className="headingContainer">
        {exampleNumber && (
          <div
            style={{
              width: "100%",
              display: "flex",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "2.2rem",
                fontWeight: 500,
                color: "var(--pink)",
                margin: "auto",
              }}
            >
              ex. {exampleNumber}
            </h3>
          </div>
        )}
        <FlexContainer
          direction="column"
          align="flex-start"
          padding="2px 5px"
        >
          <FlexContainer justify="flex-start">
            <h1
              style={{
                fontSize: titleSize,
                textShadow: textShadow,
                color: titleColor,
              }}
            >
              {title}
            </h1>
          </FlexContainer>
          <FlexContainer
            justify="flex-start"
            padding="5px 20px"
            color="var(--creme)"
          >
            {description && (
              <ul>
                {description.map(
                  (item, index) => (
                    <li key={index}>
                      {/* Pass the wordsToColor prop to the ColoredText component */}
                      <HighlightWords
                        text={item}
                        wordsToHighlight={
                          wordsToHighlight
                        }
                      />
                    </li>
                  )
                )}
              </ul>
            )}
          </FlexContainer>
        </FlexContainer>
      </div>
      {/* {children} */}
      {example?.()}
      <Break />
      <Modal>
        <div className="codeContainer">
          {markdown?.()}
        </div>
      </Modal>
    </div>
  );
}

/* ******************************************************************* */

interface ModalFunctionProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function ModalFunction({
  isOpen,
  onClose,
  children,
}: ModalFunctionProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          // ^^ had scale: 0.4 and removed
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(3px)",
            zIndex: 9998,
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            style={{
              position: "relative",
              padding: "20px 5px 5px 5px",
              borderRadius: "5px",
              backgroundColor: "var(--lightGray)",
              maxHeight: "90vh",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaWindowClose
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                cursor: "pointer",
              }}
              onClick={onClose}
              color="var(--darkGray)"
              size={25}
            />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const [isModalOpen, setIsModalOpen] =
    useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        style={{
          fontSize: "1.4rem",
          padding: "0rem 0.7rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <DiCode
          style={{ verticalAlign: "middle" }}
          size={26}
        />
        <p
          style={{
            display: "inline-block",
            marginBottom: "0",
            verticalAlign: "middle",
            lineHeight: "1",
          }}
        >
          Code
        </p>
      </button>
      <ModalFunction
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        {children}
      </ModalFunction>
    </div>
  );
}

/* ******************************************************************* */

export interface MostContainers {
  width?: string;
  height?: string;
  align?: string;
  justify?: string;
  bg?: string | undefined;
  color?: string | undefined;
  borderRadius?: string | undefined;
  border?: string | undefined;
  padding?: string | undefined;
  margin?: string | undefined;
}

/* ******************************************************************* */

interface VerticalStackProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  spacing?: string;
}

export function VerticalStack({
  spacing = "1rem",
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "center",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
  ...props
}: VerticalStackProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing,
        width: width,
        height: height,
        alignItems: align,
        justifyContent: justify,
        backgroundColor: bg,
        color: color,
        borderRadius: borderRadius,
        border: border,
        padding: padding,
        margin: margin,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
}

/* ******************************************************************* */

interface HorizontalStackProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  spacing?: string;
}

export function HorizontalStack({
  spacing = "2rem",
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "flex-start",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
  ...props
}: HorizontalStackProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: spacing,
        backgroundColor: bg,
        color: color,
        borderRadius: borderRadius,
        border: border,
        padding: padding,
        margin: margin,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
}

/* ******************************************************************* */

interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  children?: React.ReactNode;
}

export function Container({
  children,
  width = "fit-content",
  height = "fit-content",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
}: ContainerProps) {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: bg,
        color: color,
        borderRadius: borderRadius,
        border: border,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
}

/* ******************************************************************* */

interface FlexContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  children?: React.ReactNode;

  direction?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse";
}

export function FlexContainer({
  children,
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "center",
  direction = "row",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
}: FlexContainerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        width: width,
        height: height,
        backgroundColor: bg,
        color: color,
        borderRadius: borderRadius,
        border: border,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
}

/* ******************************************************************* */

interface StackContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  align?: string;
  justify?: string;
  direction?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse";
  spacing?: string;
  bg?: string | undefined;
  color?: string | undefined;
  borderRadius?: string | undefined;
  border?: string | undefined;
  padding?: string | undefined;
  margin?: string | undefined;
}

export function StackContainer({
  children,
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "center",
  direction = "column",
  spacing = "1rem",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
}: StackContainerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        width: width,
        height: height,
        gap: spacing,
        backgroundColor: bg,
        color: color,
        borderRadius: borderRadius,
        border: border,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
}

/* ******************************************************************* */

interface HighlightWordsProps {
  text: string;
  wordsToHighlight: string[];
  highlightColor?: string;
  color?: string;
}

export function HighlightWords({
  text,
  wordsToHighlight,
  highlightColor = "var(--blueTransparent)",
  color = "var(--creme)",
}: HighlightWordsProps) {
  const wrapWordsWithColor = (
    text: string,
    words: string[],
    color: string
  ) => {
    const regex = new RegExp(
      `\\b(${words.join("|")})\\b`,
      "gi"
    ); // Use word boundaries (\b) to match only whole words
    return text
      .split(regex)
      .map((word, index) => {
        if (wordsToHighlight.includes(word)) {
          // Compare without converting to lowercase
          return (
            <span
              key={index}
              style={{
                fontWeight: "var(--semiBold)",
                backgroundColor: highlightColor,
                color: color,
                borderRadius: "3px",
                padding: "0 1px",
                margin: "0 2px",
              }}
            >
              {word}
            </span>
          );
        }
        return word;
      });
  };

  return (
    <>
      {wrapWordsWithColor(
        text,
        wordsToHighlight,
        color
      )}
    </>
  );
}

/* ******************************************************************* */

interface CollapsibleProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  spacing?: string;
  divider?: boolean;
}

export function Collapsible({
  children,
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "center",
  spacing = "2rem",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
  divider = false,
}: CollapsibleProps) {
  return (
    <div
      className="collapsibleContainer"
      style={{
        gap: spacing,
        alignItems: align,
        justifyContent: justify,
        width: width,
        height: height,
        backgroundColor: bg,
        color: color,
        borderRadius: borderRadius,
        border: border,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
}

/* ******************************************************************* */

interface GridProps {
  columns: number;
  gap: number;
  children: React.ReactNode;
}

export function Grid({
  columns,
  gap,
  children,
}: GridProps) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return <div style={gridStyle}>{children}</div>;
}
