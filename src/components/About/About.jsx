import React from "react";
import Card from "../Card/Card";
import "./about.scss";

export const About = () => {
  // Handle window resize
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
  const screenWidth = window.innerWidth;

  return (
    <div className="about">
      <div className="about__padding">
        <Card
          headline={cardOneHeadline}
          subheadline={cardOneSubHeadline}
          text={cardOneText}
          weight="big"
        />
      </div>
      <div className="about__family"></div>
      <div className="about__top-medium">
        <div className="about__top-medium-card">
          <Card
            headline={cardTwoHeadline}
            subheadline={cardTwoSubHeadline}
            text={cardTwoText}
            weight="small"
          />
        </div>
        <div className={screenWidth >= 768 ? "about__left" : "noDisplay"}></div>
      </div>
      <div className="about__mid-medium">
        <div className="about__container">
          <div
            className={screenWidth <= 767 ? "about__left" : "noDisplay"}
          ></div>
          <div className="about__right"></div>
        </div>
        <div className="about__mid-medium-card">
          <Card
            headline={cardThreeHeadline}
            subheadline={cardThreeSubHeadline}
            text={cardThreeText}
            weight="small"
          />
        </div>
      </div>
      <div
        className={screenWidth <= 767 ? "about__diamond" : "noDisplay"}
      ></div>
      <div className="about__bottom-medium">
        <div className="about__bottom-medium-card">
          <Card
            headline={cardThreeHeadline}
            subheadline={cardThreeSubHeadline}
            text={cardThreeText}
            weight="small"
          />
        </div>
        <div
          className={screenWidth >= 768 ? "about__diamond" : "noDisplay"}
        ></div>
      </div>
    </div>
  );
};

export default About;
