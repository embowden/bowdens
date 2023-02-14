import React from "react";
import { Link } from "react-router-dom";
import Caro from "../Carousel/Carousel";
import "./gallery.scss";
import Card from "../Card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  // Scroll animation
  AOS.init({
    offset: 100,
    delay: 0,
    duration: 500,
    easing: "ease",
    once: true,
    anchorPlacement: "top",
    throttleDelay: 99,
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

  return (
    <div className="gallery">
      <div data-aos="fade-right">
        <Card
          headline={introHeadline}
          subheadline={introSubHeadline}
          text={introText}
          weight="big"
        />
      </div>
      <div data-aos="fade-left">
        <Caro />
      </div>
      <div data-aos="fade-right">
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
