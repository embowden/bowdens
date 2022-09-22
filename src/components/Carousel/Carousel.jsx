import image1 from "../../assets/images/carousel/bracelet-1.png";
import image2 from "../../assets/images/carousel/bracelet-2.png";
import image3 from "../../assets/images/carousel/earrings-1.png";
import image4 from "../../assets/images/carousel/earrings-2.png";
import image5 from "../../assets/images/carousel/ring-1.png";
import image6 from "../../assets/images/carousel/ring-2.png";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.scss";

export const Caro = () => {
  const text1 = "Diamond Tennis Bracelet";
  const text2 = "Diamond Marquis Bracelet";
  const text3 = "Diamond Earrings";
  const text4 = "Diamond Studs";
  const text5 = "Engagement Ring";
  const text6 = "Diamond Ring";

  return (
    // <div className="carousel__container">
    <Carousel autoPlay infiniteLoop swipeable={true}>
      <div>
        <img alt="" src={image1} />
        <p className="legend">{text1}</p>
      </div>
      <div>
        <img alt="" src={image2} />
        <p className="legend">{text2}</p>
      </div>
      <div>
        <img alt="" src={image3} />
        <p className="legend">{text3}</p>
      </div>
      <div>
        <img alt="" src={image4} />
        <p className="legend">{text4}</p>
      </div>
      <div>
        <img alt="" src={image5} />
        <p className="legend">{text5}</p>
      </div>
      <div>
        <img alt="" src={image6} />
        <p className="legend">{text6}</p>
      </div>
    </Carousel>
    // </div>
  );
};

export default Caro;

// https://www.npmjs.com/package/react-responsive-carousel
