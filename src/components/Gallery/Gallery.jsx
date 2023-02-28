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
  const introHeadline = "Client Examples";
  const introSubHeadline = "Custom. Bespoke.";
  const introText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum impedit alias doloremque debitis non? Aliquid hic ea voluptatem expedita dolorum dolore neque, voluptate velit similique eveniet ratione, soluta quam omnis!";

  //CARD 2
  const secondHeadline = "Interested?";
  const secondSubHeadline = "Make an enquiry";
  const secondText =
    "Click the link above. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laboriosam asperiores cupiditate dolor quas quidem accusantium officiis nesciunt, molestiae distinctio adipisci totam esse iste, voluptatem, maiores repellendus mollitia ipsum illo.";

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
