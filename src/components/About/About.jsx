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

  return (
    <div className="about">
      <div>
        <Card
          headline={cardOneHeadline}
          subheadline={cardOneSubHeadline}
          text={cardOneText}
          weight="big"
        />
      </div>
      <div className="about__family"></div>
      <div />
      <div>
        <Card
          headline={cardTwoHeadline}
          subheadline={cardTwoSubHeadline}
          text={cardTwoText}
          weight="small"
        />
      </div>
      <div className="about__container">
        <div className="about__left"></div>
        <div className="about__right"></div>
      </div>
      <div>
        <Card
          headline={cardThreeHeadline}
          subheadline={cardThreeSubHeadline}
          text={cardThreeText}
          weight="small"
        />
      </div>
      <div className="about__diamond"></div>
      <div>
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
