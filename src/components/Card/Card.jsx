import React from "react";
import "./card.scss";

const Card = ({ headline, subheadline, text }) => {
  return (
    <div className="card">
      <section className="card__intro">
        <div className="card__intro-text">
          <p className="card__intro-headline">{headline}</p>
          <p className="card__intro-subheadline">{subheadline}</p>
          <p className="card__intro-blurb">{text}</p>
        </div>
      </section>
    </div>
  );
};

export default Card;
