import React from "react";
import Card from "../Card/Card";
import "./about.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  // Scroll animation
  AOS.init({
    offset: 100,
    delay: 0,
    duration: 500,
    easing: "ease",
    once: true,
    anchorPlacement: "top",
    throttleDelay: 99,
  });

  // CARD 1
  const cardOneHeadline = "Family Run Business";
  const cardOneSubHeadline = "Shiny. Sparkly. Bling.";
  const cardOneText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime accusantium aliquid. Harum ipsa tempore architecto. Blanditiis quis dolorem aliquid quas veritatis ipsa fugiat necessitatibus nisi. Incidunt necessitatibus non voluptatem?";

  // CARD 2
  const cardTwoHeadline = "Made in China";
  const cardTwoSubHeadline = "Shiny. Sparkly. Bling.";
  const cardTwoText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime accusantium aliquid. Harum ipsa tempore architecto. Blanditiis quis dolorem aliquid quas veritatis ipsa fugiat necessitatibus nisi. Incidunt necessitatibus non voluptatem?";

  // CARD 3
  const cardThreeHeadline = "The Result";
  const cardThreeSubHeadline = "Shiny. Sparkly. Bling.";
  const cardThreeText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime accusantium aliquid. Harum ipsa tempore architecto. Blanditiis quis dolorem aliquid quas veritatis ipsa fugiat necessitatibus nisi. Incidunt necessitatibus non voluptatem?";

  return (
    <div className="about">
      <div data-aos="fade-right">
        <Card
          headline={cardOneHeadline}
          subheadline={cardOneSubHeadline}
          text={cardOneText}
          weight="big"
        />
      </div>
      <div className="about__family" data-aos="fade-left"></div>
      <div />
      <div data-aos="fade-right">
        <Card
          headline={cardTwoHeadline}
          subheadline={cardTwoSubHeadline}
          text={cardTwoText}
          weight="small"
        />
      </div>
      <div className="about__container" data-aos="fade-left">
        <div className="about__left"></div>
        <div className="about__right"></div>
      </div>
      <div data-aos="fade-right">
        <Card
          headline={cardThreeHeadline}
          subheadline={cardThreeSubHeadline}
          text={cardThreeText}
          weight="small"
        />
      </div>
      <div className="about__diamond" data-aos="fade-left"></div>
      <div data-aos="fade-right">
        <Card
          headline={cardThreeHeadline}
          subheadline={cardThreeSubHeadline}
          text={cardThreeText}
          weight="small"
        />
      </div>
    </div>
  );
};

export default About;
