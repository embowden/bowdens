import React from "react";
import Card from "../Card/Card";

export const About = () => {
  // CARD 1
  const cardOneHeadline = "Diamonds Diamonds";
  const cardOneSubHeadline = "Shiny. Sparkly. Bling.";
  const cardOneText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime accusantium aliquid. Harum ipsa tempore architecto. Blanditiis quis dolorem aliquid quas veritatis ipsa fugiat necessitatibus nisi. Incidunt necessitatibus non voluptatem?";

  // CARD 2
  const cardTwoHeadline = "Diamonds Diamonds";
  const cardTwoSubHeadline = "Shiny. Sparkly. Bling.";
  const cardTwoText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime accusantium aliquid. Harum ipsa tempore architecto. Blanditiis quis dolorem aliquid quas veritatis ipsa fugiat necessitatibus nisi. Incidunt necessitatibus non voluptatem?";

  // CARD 3
  const cardThreeHeadline = "Diamonds Diamonds";
  const cardThreeSubHeadline = "Shiny. Sparkly. Bling.";
  const cardThreeText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime accusantium aliquid. Harum ipsa tempore architecto. Blanditiis quis dolorem aliquid quas veritatis ipsa fugiat necessitatibus nisi. Incidunt necessitatibus non voluptatem?";

  return (
    <div>
      <Card
        headline={cardOneHeadline}
        subheadline={cardOneSubHeadline}
        text={cardOneText}
        weight="big"
      />
      <Card
        headline={cardTwoHeadline}
        subheadline={cardTwoSubHeadline}
        text={cardTwoText}
        weight="small"
      />
      <Card
        headline={cardThreeHeadline}
        subheadline={cardThreeSubHeadline}
        text={cardThreeText}
        weight="small"
      />
    </div>
  );
};

export default About;
