import { useEffect } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import {
  Break,
  Collapsible,
  FlexContainer,
  HorizontalStack,
  VerticalStack,
} from "~/styles/designComponents";

interface fitSectionProps {
  title?: string;
  subheading?: string;
  content?: string;
  contentList?: string[]; // Add contentList prop to accept a list of strings
  image?: string;
  imagePosition?: "left" | "right";
  imageAlt?: string;
}

export function FitSection({
  title,
  subheading,
  content,
  contentList,
  image,
  imageAlt,
  imagePosition = "right",
}: fitSectionProps) {
  return (
    <div className="fitSection">
      {imagePosition === "right" && (
        <Collapsible>
          <div className="fitSectionContent">
            <h2
              className="caveat"
              style={{
                fontSize: "4rem",
                fontWeight: 400,
              }}
            >
              {title}
            </h2>
            {subheading && <h3>{subheading}</h3>}
            {contentList ? ( // Check if contentList exists
              <ul>
                {contentList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p> // Render content as a paragraph if contentList is not provided
            )}
          </div>
          {image && (
            <div className="fitSectionImage">
              <img
                src={image}
                alt={imageAlt}
                width="275px"
              />
            </div>
          )}
        </Collapsible>
      )}
      {imagePosition === "left" && (
        <Collapsible>
          {image && (
            <div className="fitSectionImage">
              <img
                src={image}
                alt={imageAlt}
                width="275px"
              />
            </div>
          )}
          <div
            className={`fitSectionContent ${
              !image
                ? "fitSectionContentFullWidth"
                : ""
            }`}
          >
            <h2
              className="caveat"
              style={{
                fontSize: "4rem",
                fontWeight: 400,
              }}
            >
              {title}
            </h2>
            <p>{content}</p>
          </div>
        </Collapsible>
      )}
    </div>
  );
}

/* ********************************************************************************** */

type TextAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

interface fitHeadingProps {
  heading?: string;
  subheading?: string;
  headingSize?: string;
  subHeadingSize?: string;
  textShadow?: string;
  align?: string;
  textAlign?: TextAlign;
}

export function FitHeading({
  heading,
  subheading,
  align = "flex-start",
  textAlign = "left",
  textShadow = "none",
  headingSize = "large",
  subHeadingSize = "medium",
}: fitHeadingProps) {
  const sizes: { [key: string]: string } = {
    small: "3rem",
    medium: "4rem",
    large: "5rem",
    xlarge: "6rem",
    xxlarge: "8rem",
    xxxlarge: "9rem",
    xxxxlarge: "10rem",
  };

  return (
    <FlexContainer>
      <VerticalStack align={align}>
        <h2
          className="caveat"
          style={{
            fontSize: sizes[headingSize],
            textShadow: textShadow,
            textAlign: textAlign,
            fontWeight: 400,
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontSize: sizes[subHeadingSize],
            textShadow: textShadow,
            textAlign: textAlign,
          }}
        >
          {subheading}
        </p>
      </VerticalStack>
    </FlexContainer>
  );
}

/* ********************************************************************************** */

interface ParallaxImageProps {
  imageUrl: string;
  altText: string;
  speed?: number;
  children?: React.ReactNode;
}

export function ParallaxImage({
  imageUrl,
  altText,
  speed = 0.5,
  children,
}: ParallaxImageProps) {
  useEffect(() => {
    const parallaxImage = document.querySelector(
      ".parallax-image"
    ) as HTMLElement;

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const parallaxOffset =
        scrollPosition * speed;
      parallaxImage.style.transform = `translateY(-${parallaxOffset}px)`;
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [speed]);

  return (
    <div className="parallax-container">
      <img
        className="parallax-image"
        src={imageUrl}
        alt={altText}
      />

      {children}
    </div>
  );
}

/* ********************************************************************************** */

const contact = {
  address: "123 Main Street, Anytown, USA",
  phone: "(555) 123-4567",
  email: "info@fitlifestudio.com",
  website: "www.fitlifestudio.com",
};

const socialMedia = {
  facebook: "/fitlifestudio",
  twitter: "https://www.twitter.com",
  instagram: "@fitlifestudio",
  youtube: "@fitlifestudio",
};

export function Footer() {
  return (
    <div
      className="footer"
      style={{
        width: "fit-content",
        marginTop: "10px",
      }}
    >
      <Break height="30px" />
      <FlexContainer
        direction="row"
        padding="5px 10px"
        justify="space-evenly"
      >
        <Collapsible
          width="fit-content"
          spacing="60px"
          align="flex-start"
        >
          <FlexContainer
            direction="column"
            width="fit-content"
          >
            <h3
              className="caveat"
              style={{ fontSize: "3rem" }}
            >
              Social Media
            </h3>
            <HorizontalStack>
              <p>
                <a
                  href={socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook size={30} />
                </a>
              </p>
              <p>
                <a
                  href={socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter size={30} />
                </a>
              </p>
              <p>
                <a
                  href={socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram size={30} />
                </a>
              </p>
              <p>
                <a
                  href={socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube size={30} />
                </a>
              </p>
            </HorizontalStack>
          </FlexContainer>
          <FlexContainer>
            <VerticalStack spacing="5px">
              <h3
                className="caveat"
                style={{ fontSize: "3rem" }}
              >
                Contact Us
              </h3>
              <p>{contact.address}</p>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
              <p>{contact.website}</p>
            </VerticalStack>
          </FlexContainer>
        </Collapsible>
      </FlexContainer>
    </div>
  );
}
