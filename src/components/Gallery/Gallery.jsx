import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Caro from "../Carousel/Carousel";
import "./gallery.scss";
import Card from "../Card/Card";
import { inView, animate } from "motion";

const Gallery = () => {
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

  //CARD 1
  const introHeadline = "Current Stock";
  const introSubHeadline = "Custom. Bespoke.";
  const introText =
    "Our current stock can be seen in the gallery below, however you can choose the cut, clarity, carat, colour and setting for your previous set lab grown diamond creations.";

  //CARD 2
  const secondHeadline = "Interested?";
  const secondSubHeadline = "Make an enquiry";
  const secondText =
    "Visit the link above and let us help you fulfil your dreams.";

  // ANIMATION
  useEffect(() => {
    play();
  }, []);

  const play = () => {
    const galleryElements = [
      ".gallery__card",
      ".gallery__carousel",
      ".gallery__image",
    ];

    galleryElements.forEach((section) => {
      inView(section, () => {
        animate(section, { opacity: 1 }, { duration: 2 }, { delay: 0.5 });
      });
    });
  };

  return (
    <div className="gallery">
      <div className="gallery__card">
        <Card
          headline={introHeadline}
          subheadline={introSubHeadline}
          text={introText}
          weight="big"
        />
      </div>
      <div className="gallery__medium">
        <div className="gallery__carousel">
          <Caro />
        </div>
        <div className="gallery__right">
          <div className="gallery__image"></div>
        </div>
      </div>
      <div className="gallery__card">
        <Card
          headline={secondHeadline}
          subheadline={
            <Link to="/contact" className="gallery__link">
              {secondSubHeadline}
            </Link>
          }
          text={secondText}
          weight="big"
        />
      </div>
    </div>
  );
};

export default Gallery;
