import React from "react";
import { FlexContainer } from "~/styles/designComponents";

interface CardComponentProps {
  children?: React.ReactNode;
  color?: string;
  badgeText?: string | undefined;
  headerText?: string;
  numLines?: number;
  bodyText?: string;
  footer?: string | undefined;
  imageLink?: string | undefined;
  imageAlt?: string | undefined;
}

export default function CardComponent({
  children,
  color = "var(--orange)",
  numLines,
  badgeText,
  headerText = "",
  bodyText = "",
  footer,
  imageLink,
  imageAlt,
}: CardComponentProps) {
  return (
    <div
      className="cardContainer"
      style={{ backgroundColor: color }}
    >
      {badgeText && <Badge label={badgeText} />}
      <div className="cardHeader">
        <p>{headerText}</p>
      </div>
      <div className="cardBody">
        <div>
          {numLines ? (
            <ShortText numLines={numLines}>
              {bodyText}
            </ShortText>
          ) : (
            <p>{bodyText}</p>
          )}
        </div>
        {imageLink && imageAlt && (
          <Image src={imageLink} alt={imageAlt} />
        )}
        {children}
      </div>
      {footer && (
        <div className="cardFooter">{footer}</div>
      )}
    </div>
  );
}

/* ******************************************************** */

interface BadgeProps {
  label: string;
  align?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  boxShadow?: string;
  borderRadius?: string;
  border?: string;
}

export function Badge({
  label,
  align = "center",
  width = "fit-content",
  backgroundColor = "var(--yellow)",
  color = "var(--darkGray)",
  boxShadow = "var(--smallShadowBlack)",
  borderRadius = "var(--badgeBorderRadius)",
  border = "none",
}: BadgeProps) {
  return (
    <FlexContainer align={align}>
      <div
        style={{
          width: width,
          backgroundColor: backgroundColor,
          color: color,
          boxShadow: boxShadow,
          borderRadius: borderRadius,
          border: border,
          fontWeight: 500,
          padding: "3px 10px",
          marginBottom: "5px",
        }}
      >
        {label}
      </div>
    </FlexContainer>
  );
}

/* ******************************************************** */
interface ImageProps {
  src: string;
  alt: string;
}

export function Image({ src, alt }: ImageProps) {
  return (
    <div
      className="cardImage"
      style={{
        margin: "var(--smallSpacing)",
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

/* ******************************************************** */

interface CardGridProps {
  children: React.ReactNode;
}

export function CardGrid({
  children,
}: CardGridProps) {
  return (
    <div className="cardGrid">{children}</div>
  );
}

/* ******************************************************** */

interface ShortTextProps {
  numLines?: number;
  children: React.ReactNode;
}

export function ShortText({
  numLines = 2,
  children,
}: ShortTextProps) {
  return (
    <div
      className={`shortText numberOfLines-${numLines}`}
    >
      {children}
    </div>
  );
}
