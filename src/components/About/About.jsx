import React from "react";
import Card from "../Card/Card";
import FamilyPic from "../../assets/images/family.jpg";
import Crafting from "../../assets/images/crafting.jpg";
import CraftingTwo from "../../assets/images/crafting2.jpg";
import Diamond from "../../assets/images/pear.jpg";
import "./about.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  AOS.init({
    offset: 100,
    delay: 0,
    duration: 500,
    easing: "ease",
    once: true,
    anchorPlacement: "top",
    throttleDelay: 99,
  });
  //
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
      <div data-aos="fade-up">
        <Card
          headline={cardOneHeadline}
          subheadline={cardOneSubHeadline}
          text={cardOneText}
          weight="big"
        />
      </div>
      <img
        className="about__family"
        src={FamilyPic}
        alt=""
        data-aos="fade-up"
      />
      <div />
      <div data-aos="fade-up">
        <Card
          headline={cardTwoHeadline}
          subheadline={cardTwoSubHeadline}
          text={cardTwoText}
          weight="small"
        />
      </div>
      <div className="about__container" data-aos="fade-up">
        <div className="about__left">
          <img src={Crafting} alt="" className="about__left-image" />
        </div>
        <div className="about__right">
          <img src={CraftingTwo} alt="" className="about__right-image" />
        </div>
      </div>
      <div data-aos="fade-up">
        <Card
          headline={cardThreeHeadline}
          subheadline={cardThreeSubHeadline}
          text={cardThreeText}
          weight="small"
        />
      </div>
      <img className="about__diamond" src={Diamond} alt="" data-aos="fade-up" />
      <div data-aos="fade-up">
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
