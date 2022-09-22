import React from "react";
import Caro from "../Carousel/Carousel";
import "./gallery.scss";

const Gallery = () => {
  const introHeadline = "Client Examples";
  const introSubHeadline = "Custom. Bespoke.";
  const introText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum impedit alias doloremque debitis non? Aliquid hic ea voluptatem expedita dolorum dolore neque, voluptate velit similique eveniet ratione, soluta quam omnis!";

  return (
    <div className="gallery">
      <section className="gallery__intro">
        <div className="gallery__intro-text">
          <p className="gallery__intro-headline">{introHeadline}</p>
          <p className="gallery__intro-subheadline">{introSubHeadline}</p>
          <p className="gallery__intro-blurb">{introText}</p>
        </div>
      </section>
      <Caro />
    </div>
  );
};

export default Gallery;
