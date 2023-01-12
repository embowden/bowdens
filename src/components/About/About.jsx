import React from "react";
import Card from "../Card/Card";
import FamilyPic from "../../assets/images/family.jpg";
import Crafting from "../../assets/images/crafting.jpg";
import CraftingTwo from "../../assets/images/crafting2.jpg";
import Diamond from "../../assets/images/pear.jpg";
import "./about.scss";

export const About = () => {
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
      <Card
        headline={cardOneHeadline}
        subheadline={cardOneSubHeadline}
        text={cardOneText}
        weight="big"
      />
      <img className="about__family" src={FamilyPic} alt="" />
      <Card
        headline={cardTwoHeadline}
        subheadline={cardTwoSubHeadline}
        text={cardTwoText}
        weight="small"
      />
      <div className="about__container">
        <div className="about__left">
          <img src={Crafting} alt="" className="about__left-image" />
        </div>
        <div className="about__right">
          <img src={CraftingTwo} alt="" className="about__right-image" />
        </div>
      </div>
      <Card
        headline={cardThreeHeadline}
        subheadline={cardThreeSubHeadline}
        text={cardThreeText}
        weight="small"
      />
      <img className="about__diamond" src={Diamond} alt="" />
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
