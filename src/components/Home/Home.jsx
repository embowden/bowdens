import React from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";
import posterImage from "../../assets/images/hand.jpg";
import reviewImage from "../../assets/images/necklace.jpg";

export const Home = () => {
  return (
    <>
      <img src={posterImage} alt="" className="home__poster" />
      <div className="home__poster-text">
        <p className="home__poster-headline">Lab-Grown Diamonds</p>
        <p className="home__poster-subheadline">
          Modern. Ethical. Conscious. Empowering.
        </p>
        <button className="home__poster-cta">Show me more</button>
      </div>
      <div className="home__intro">
        <div className="home__intro-container">
          <p className="home__intro-welcome">welcome to</p>
          <p className="home__intro-company">Bowdens Diamonds</p>
        </div>
        <p className="home__intro-blurb">
          The home of luxury jewellery, exquiste timepieces and designer
          accessories, as well as our own collections and beautifully crafted
          custom pieces.
        </p>
        <NavLink
          to="/contact"
          className="home__intro-contact"
          // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
        >
          Get in touch
        </NavLink>
      </div>
      <div className="home__review">
        <img src={reviewImage} alt="" className="home__review-image" />
        <div className="home__review-container">
          <p className="home__review-header">Only Luxury.</p>
          <p className="home__review-subheader">For you.</p>
          <p className="home__review-text">
            "The Bowdens reputation for the finest products backed up by great
            customer service is well earned. A company you can trust. Thank
            you!"
          </p>
          <p className="home__review-person">Lizzie Knight</p>
        </div>
      </div>
    </>
  );
};

export default Home;
