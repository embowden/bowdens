import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./about.scss";
import { inView, animate } from "motion";

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

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // CARD 1
  const cardOneHeadline = "Family Run Business";
  const cardOneSubHeadline = "Ambleside, Lake District";
  const cardOneText =
    "We are a small family run business based in Ambleside, the Lake District. We support you through the process of design and manufacture of your Lab Made Diamond creation, whether it is an engagement ring, an eternity ring, or that special piece that is unique to you - we are here to help. Please use the enquiry form to contact us and let us help you achieve something very special.";

  // // CARD 2
  // const cardTwoHeadline = "Made in China";
  // const cardTwoSubHeadline = "Shiny. Sparkly. Bling.";
  // const cardTwoText =
  //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime accusantium aliquid. Harum ipsa tempore architecto. Blanditiis quis dolorem aliquid quas veritatis ipsa fugiat necessitatibus nisi. Incidunt necessitatibus non voluptatem?";

  // // CARD 3
  // const cardThreeHeadline = "The Result";
  // const cardThreeSubHeadline = "Shiny. Sparkly. Bling.";
  // const cardThreeText =
  //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime accusantium aliquid. Harum ipsa tempore architecto. Blanditiis quis dolorem aliquid quas veritatis ipsa fugiat necessitatibus nisi. Incidunt necessitatibus non voluptatem?";
  // const screenWidth = window.innerWidth;

  // ANIMATION
  useEffect(() => {
    play();
  }, []);

  const play = () => {
    const aboutElements = [
      ".about__padding",
      ".about__family",
      ".about__top-medium-card",
      ".about__mid-medium-card",
      ".about__bottom-medium-card",
      ".about__left",
      ".about__right",
      ".about__diamond",
    ];

    aboutElements.forEach((section) => {
      inView(section, () => {
        animate(section, { opacity: 1 }, { duration: 2 }, { delay: 0.5 });
      });
    });
  };

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
      {/* <div className="about__top-medium">
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
      </div> */}
    </div>
  );
};

export default About;
