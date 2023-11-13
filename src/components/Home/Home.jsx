import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";
import leftImage from "../../assets/images/earrings.jpg";
import rightImage from "../../assets/images/bespoke.jpg";
import { inView, animate } from "motion";

export const Home = () => {
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

  // Content variables
  const posterHeadline = "Lab-Grown Diamonds";
  const posterSubHeadline = "Modern. Ethical. Conscious. Empowering.";
  const introHeadline = "welcome to";
  const introSubHeadline = "Diamonds Made For You";
  const introBlurb =
    "The home of luxury, timeless pieces with a modern twist, using Lab Grown diamonds in our creations. You can design your own piece in the most precious mentals and lab grown diamond specifications.";
  const reviewHeadline = "Only Luxury.";
  const reviewSubHeadline = "For you.";
  const reviewText =
    "The company has been trading since 2016 and offers the finest products and customer service, whilst always trying to bring our collections to you at an affordable price.";
  // const reviewName = "Visit Gallery";
  const lastHeadline = "Create your";
  const lastSubHeadline = "own creation";
  const lastText =
    "You can choose the following for your previous set Lab Grown Diamond creation:";
  // const lastSmallText = "Lorem Ipsum";
  const screenWidth = window.innerWidth;

  // ANIMATION
  useEffect(() => {
    play();
  }, []);

  const play = () => {
    const homeElements = [
      ".home__poster",
      ".home__intro",
      ".home__article-image",
      ".home__left-image",
      ".home__article",
      ".home__right-image",
      ".home__right-link",
      ".home__left-link",
      ".home__squares",
    ];

    homeElements.forEach((section) => {
      inView(section, () => {
        animate(section, { opacity: 1 }, { duration: 2 }, { delay: 0.5 });
      });
    });
  };

  return (
    <>
      {/* POSTER */}
      <div className="parentBox">
        <section className="home__poster">
          <div className="home__poster-text">
            <p className="home__poster-headline">{posterHeadline}</p>
            <p className="home__poster-subheadline">{posterSubHeadline}</p>
            <NavLink to="/about" className="home__poster-cta">
              Discover More
            </NavLink>
          </div>
        </section>
        {/* INTRODUCTION */}
        <div className="home__intro-wrapper">
          <section className="home__intro">
            <div className="home__intro-container">
              <p className="home__intro-welcome">{introHeadline}</p>
              <p className="home__intro-company">{introSubHeadline}</p>
            </div>
            <p className="home__intro-blurb">{introBlurb}</p>
            <NavLink to="/contact" className="home__intro-contact">
              Get in touch
            </NavLink>
          </section>
          {/* NECKLACE IMAGE */}
          <div className="home__article-image"></div>
        </div>
        {/* REVIEWS */}
        <div className="home__article-wrapper">
          <div
            className={screenWidth >= 768 ? "home__left-image" : "noDisplay"}
          >
            <NavLink to="/gallery" className="home__left-link">
              Visit Gallery
            </NavLink>
          </div>
          <section className="home__article">
            <div className="home__article-container">
              <p className="home__article-header">{reviewHeadline}</p>
              <p className="home__article-subheader">{reviewSubHeadline}</p>
              <p className="home__article-text">{reviewText}</p>
              <NavLink to="/gallery" className="home__intro-contact">
                Visit Gallery
              </NavLink>
            </div>
          </section>
        </div>
        {/* CTA SQUARES */}
        <section className="home__squares">
          {/* IF MOBILE, DISPLAY LEFT SQUARE WITH RIGHT SQUARE */}
          <div
            className={screenWidth <= 767 ? "home__left-square" : "noDisplay"}
          >
            <img
              src={leftImage}
              alt=""
              className="home__left-image"
              id="test"
            />
            <NavLink to="/gallery" className="home__left-link">
              Visit Gallery
            </NavLink>
          </div>
          {/* IF TABLET+ DISPLAY TEXT INSTEAD */}
          <section
            className={screenWidth >= 768 ? "home__article" : "noDisplay"}
          >
            <div className="home__article-container">
              <p className="home__article-header">{lastHeadline}</p>
              <p className="home__article-subheader">{lastSubHeadline}</p>
              <p className="home__article-text">{lastText}</p>
              <p className="home__article-text">
                <ul>
                  <li>Cut - Shape of the Diamond</li>
                  <li>Clarity - Inclusions in the Diamond</li>
                  <li>Carat - Weight of the Diamond</li>
                  <li>Colour - Shade of the Diamond</li>
                  <li>Setting - 18ct White or Yellow Gold / Platinum</li>
                </ul>
              </p>
              {/* <p className="home__article-person">{lastSmallText}</p> */}
              <NavLink to="/contact" className="home__intro-contact">
                Bespoke Enquiries
              </NavLink>
            </div>
          </section>
          <div className="home__right-square">
            <img src={rightImage} alt="" className="home__right-image" />
            <NavLink to="/contact" className="home__right-link">
              Bespoke Enquiries
            </NavLink>
          </div>
        </section>
        {/* NEXT SECTION */}
        <section className={screenWidth <= 767 ? "home__article" : "noDisplay"}>
          <div className="home__article-container">
            <p className="home__article-header">{lastHeadline}</p>
            <p className="home__article-subheader">{lastSubHeadline}</p>
            <p className="home__article-text">{lastText}</p>
            <p className="home__article-text">
              <ul>
                <li>Cut - Shape of the Diamond</li>
                <li>Clarity - Inclusions in the Diamond</li>
                <li>Carat - Weight of the Diamond</li>
                <li>Colour - Shade of the Diamond</li>
                <li>Setting - 18ct White or Yellow Gold / Platinum</li>
              </ul>
            </p>
            {/* <p className="home__article-person">{lastSmallText}</p> */}
            <NavLink to="/contact" className="home__intro-contact">
              Bespoke Enquiries
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

// Convert to cards?
