import image1 from "../../assets/images/bespoke.jpg";
import image2 from "../../assets/images/earrings.jpg";
import image3 from "../../assets/images/gemstones.jpg";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.scss";

export const Caro = () => {
  const text1 = "text";
  const text2 = "text";
  const text3 = "text";
  const text4 = "text";
  const text5 = "text";
  const text6 = "text";

  return (
    <div className="carousel__container">
      <Carousel autoPlay>
        <div>
          <img alt="" src={image1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img alt="" src={image2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img alt="" src={image3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Caro;

// https://www.npmjs.com/package/react-responsive-carousel
