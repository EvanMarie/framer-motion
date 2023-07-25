import { LinksFunction } from "@remix-run/node";
import styles from "./fitnessBiz.css";
import { motion, useScroll } from "framer-motion";
import {
  Break,
  FlexContainer,
} from "~/styles/designComponents";
import {
  FitHeading,
  FitSection,
  Footer,
  ParallaxImage,
} from "./fitnessBizComponents";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap",
  },
];

const imageUrlOne = " /images/fitImageTemp.png";

export default function FitnessBiz() {
  const { scrollYProgress } = useScroll();

  return (
    <FlexContainer
      justify="center"
      direction="column"
    >
      {" "}
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          width: "100%",
        }}
      />
      <ParallaxImage
        imageUrl="/images/yogaGradient.png"
        altText="Parallax Image"
        speed={0.7}
      >
        <div className="titleCenter">
          <div className="titleContainer">
            <FitHeading
              heading="FitLife Studio"
              subheading="Fitness starts here."
              align="flex-end"
              textAlign="right"
              headingSize="xxxlarge"
              subHeadingSize="small"
              textShadow="10px 4px 8px #000000"
            />
          </div>
        </div>
      </ParallaxImage>
      <div className="mainContent">
        {" "}
        <FitSection
          title="About Us"
          content="At FitLife Studio, we believe that fitness is not just a destination but a way of life. Our state-of-the-art fitness facility is designed to cater to individuals of all fitness levels, from beginners to advanced athletes. With a team of certified trainers and cutting-edge equipment, we are committed to helping you achieve your fitness goals in a supportive and motivating environment."
          image={imageUrlOne}
          imageAlt="Image"
        />
        <FitSection
          title="Group Fitness Classes"
          content="Join our invigorating group classes led by experienced instructors. From high-intensity workouts like HIIT and Bootcamp to mind-body practices like Yoga and Pilates, we offer a wide variety of classes to keep your fitness routine exciting and effective."
        />
        <FitSection
          title="Personal Training"
          content=" For personalized attention and accelerated results, our certified personal trainers are here to guide you every step of the way. Whether you want to lose weight, build muscle, or improve your overall fitness, our trainers will create a tailored program just for you."
          image={imageUrlOne}
          imagePosition="right"
          imageAlt="Image"
        />{" "}
        <FitSection
          title="Cardio and Strength Training"
          content="Strengthen your heart and muscles with our state-of-the-art cardio and strength training equipment. From treadmills and ellipticals to free weights and resistance machines, we have everything you need for a comprehensive workout."
          image={imageUrlOne}
          imagePosition="left"
          imageAlt="Image"
        />{" "}
        <FitSection
          title="Nutrition Guidance"
          content="Achieve lasting results by complementing your exercise routine with proper nutrition. Our nutrition experts will work with you to create a balanced and sustainable meal plan that aligns with your fitness goals."
          image={imageUrlOne}
          imagePosition="right"
          imageAlt="Image"
        />
        <FitSection
          title="Fitness Challenges"
          content="Stay motivated and push your limits with our exciting fitness challenges. Whether it's a weight loss challenge or a team-based event, these challenges add an element of fun and camaraderie to your fitness journey."
          image={imageUrlOne}
          imagePosition="left"
          imageAlt="Image"
        />
        <FitSection
          title="Membership Benefits"
          contentList={[
            "Unlimited access to all group fitness classes",
            "Complimentary fitness assessment and personalized workout plan",
            "Access to our online member portal with workout resources and nutrition tips",
            "Exclusive discounts on personal training sessions and merchandise",
          ]}
        />
        <FitSection
          title="Join the FitLife Community"
          content="At FitLife Studio, we are more than just a fitness center; we are a community of like-minded individuals on a journey towards better health and well-being. Join our welcoming and supportive community, and let's achieve our fitness goals together!"
        />
      </div>
      <FlexContainer
        bg="var(--fitBlueTransparent)"
        direction="column"
      >
        <Footer />
        <Break />
      </FlexContainer>
    </FlexContainer>
  );
}

// const contact = {
//   address: "123 Main Street, Anytown, USA",
//   phone: "(555) 123-4567",
//   email: "info@fitlifestudio.com",
//   website: " www.fitlifestudio.com",
// };

// const socialMedia = {
//   facebook: "/fitlifestudio",
//   twitter: "https://www.twitter.com",
//   instagram: "@fitlifestudio",
//   youtube: "@fitlifestudio",
// };

// const coda =
//   "Visit FitLife Studio today and take the first step towards a fitter, happier you! Our friendly staff is ready to assist you on your fitness journey. Let's make this transformation together!";
