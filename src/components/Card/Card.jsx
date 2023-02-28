import React, { useEffect } from "react";
import "./card.scss";
import { inView, animate } from "motion";

const Card = ({ headline, subheadline, text, weight }) => {
  const weightCheck = (weight) => {
    if (weight === "big") {
      return true;
    } else if (weight === "small") {
      return false;
    }
  };

  // ANIMATION
  useEffect(() => {
    play();
  }, []);

  const play = () => {
    const galleryElements = [".card"];

    galleryElements.forEach((section) => {
      inView(section, () => {
        animate(section, { opacity: 1 }, { duration: 2 }, { delay: 0.5 });
      });
    });
  };

  return (
    <div className="card">
      <section className="card__intro">
        <div className="card__intro-text">
          <p
            className={
              weightCheck(weight)
                ? "card__intro-headline"
                : "card__intro-headline--small"
            }
          >
            {headline}
          </p>
          <p
            className={
              weightCheck(weight)
                ? "card__intro-subheadline"
                : "card__intro-subheadline--small"
            }
          >
            {subheadline}
          </p>
          <p className="card__intro-blurb">{text}</p>
        </div>
      </section>
    </div>
  );
};

export default Card;
