export interface CardData {
  color?: string;
  badgeText?: string;
  headerText?: string;
  numLines?: number;
  bodyText?: string;
  footer?: string;
  imageLink?: string;
  imageAlt?: string;
  link?: string;
}

export const cardData: CardData[] = [
  {
    color: "var(--pink)",
    badgeText: "Fitness",
    headerText: "FitLife Studio",
    numLines: 1,
    bodyText:
      "Once upon a time, in the whimsical world of Fuzzington, there lived a dog named Joe, who was the master of mischief and mirth. Joe had a peculiar talent for speaking fluent cat and could often be found engaging in hilarious conversations with the neighborhood feline community.",

    imageLink: "images/fitLife/fitLifeCard.png",
    imageAlt: "Image",
    link: "/pages/fitnessBiz",
  },
  {
    color: "var(--orange)",
    badgeText: "Badge",
    headerText: "Header",
    numLines: 2,
    bodyText:
      "Once upon a time, in the whimsical world of Fuzzington, there lived a dog named Joe, who was the master of mischief and mirth. Joe had a peculiar talent for speaking fluent cat and could often be found engaging in hilarious conversations with the neighborhood feline community.",

    imageLink: "https://picsum.photos/400/400",
    imageAlt: "Image",
  },
  {
    color: "var(--medTealTransparent)",
    badgeText: "Badge",
    headerText: "Header",
    numLines: 3,
    bodyText:
      "Once upon a time, in the whimsical world of Fuzzington, there lived a dog named Joe, who was the master of mischief and mirth. Joe had a peculiar talent for speaking fluent cat and could often be found engaging in hilarious conversations with the neighborhood feline community.",

    imageLink: "https://picsum.photos/400/400",
    imageAlt: "Image",
  },
  {
    color: "var(--blue)",
    badgeText: "Badge",
    headerText: "Header",
    numLines: 1,
    bodyText:
      "Once upon a time, in the whimsical world of Fuzzington, there lived a dog named Joe, who was the master of mischief and mirth. Joe had a peculiar talent for speaking fluent cat and could often be found engaging in hilarious conversations with the neighborhood feline community.",

    imageLink: "https://picsum.photos/400/400",
    imageAlt: "Image",
  },
];
