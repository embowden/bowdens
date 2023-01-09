import React from "react";
import Caro from "../Carousel/Carousel";
import "./gallery.scss";
import Card from "../Card/Card";

const Gallery = () => {
  const introHeadline = "Client Examples";
  const introSubHeadline = "Custom. Bespoke.";
  const introText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum impedit alias doloremque debitis non? Aliquid hic ea voluptatem expedita dolorum dolore neque, voluptate velit similique eveniet ratione, soluta quam omnis!";

  return (
    <div className="gallery">
      <Card
        headline={introHeadline}
        subheadline={introSubHeadline}
        text={introText}
      />
      <Caro />
    </div>
  );
};

export default Gallery;
