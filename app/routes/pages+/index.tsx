import { Header } from "~/styles/designComponents";
import CardComponent, {
  CardGrid,
} from "./cardComponent/cardComponent";
import { cardData } from "./cardComponent/testingCards";

export default function Pages() {
  return (
    <div className="bigContainer">
      <div className="contentContainer">
        <Header
          title="Example Pages"
          titleSize="3rem"
          textShadow="var(--smallShadowBlack)"
          titleColor="var(--green)"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            borderRadius: "var(--mediumRadius)",
            width: "100%",
            backgroundColor: "var(--green)",
            color: "var(--darkGray)",
            padding: "var(--smallPadding)",
          }}
        >
          <CardGrid>
            {cardData.map((card, index) => (
              <CardComponent
                key={index}
                color={card.color}
                badgeText={card.badgeText}
                headerText={card.headerText}
                bodyText={card.bodyText}
                footer={card.footer}
                imageLink={card.imageLink}
                imageAlt={card.imageAlt}
              />
            ))}
          </CardGrid>
        </div>
      </div>
    </div>
  );
}
