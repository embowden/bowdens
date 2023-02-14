import React from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";
import posterImage from "../../assets/images/hand.jpg";
import reviewImage from "../../assets/images/necklace.jpg";
import leftImage from "../../assets/images/earrings.jpg";
import rightImage from "../../assets/images/bespoke.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
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

  //
  const posterHeadline = "Lab-Grown Diamonds";
  const posterSubHeadline = "Modern. Ethical. Conscious. Empowering.";
  const introHeadline = "welcome to";
  const introSubHeadline = "Bowdens Diamonds";
  const introBlurb =
    "The home of luxury jewellery, exquiste timepieces and designer accessories, as well as our own collections and beautifully crafted custom pieces.";
  const reviewHeadline = "Only Luxury.";
  const reviewSubHeadline = "For you.";
  const reviewText =
    "The Bowdens reputation for the finest products backed up by great customer service is well earned. A company you can trust. Thank you!";
  const reviewName = "Lizzie Knight";
  const lastHeadline = "More text.";
  const lastSubHeadline = "Whatever you want.";
  const lastText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus quasi sed laborum ipsam tempora tenetur modi sunt? Quia alias doloribus, est nisi debitis neque et dicta maxime ipsam voluptatibus!";
  const lastSmallText = "Lorem Ipsum";

  return (
    <>
      {/* POSTER */}
      <section className="home__poster" data-aos="fade-down">
        <img src={posterImage} alt="" className="home__poster-image" />
        <div className="home__poster-text">
          <p className="home__poster-headline">{posterHeadline}</p>
          <p className="home__poster-subheadline">{posterSubHeadline}</p>
          <NavLink to="/about" className="home__poster-cta">
            Discover More
          </NavLink>
        </div>
      </section>
      {/* INTRODUCTION */}
      <section className="home__intro" data-aos="fade-right">
        <div className="home__intro-container">
          <p className="home__intro-welcome">{introHeadline}</p>
          <p className="home__intro-company">{introSubHeadline}</p>
        </div>
        <p className="home__intro-blurb">{introBlurb}</p>
        <NavLink to="/contact" className="home__intro-contact">
          Get in touch
        </NavLink>
      </section>
      {/* REVIEWS */}
      <section className="home__article" data-aos="fade-left">
        <img src={reviewImage} alt="" className="home__article-image" />
        <div className="home__article-container">
          <p className="home__article-header">{reviewHeadline}</p>
          <p className="home__article-subheader">{reviewSubHeadline}</p>
          <p className="home__article-text">{reviewText}</p>
          <p className="home__article-person">{reviewName}</p>
        </div>
      </section>
      {/* CTA SQUARES */}
      <section className="home__squares" data-aos="fade-right">
        <div className="home__left-square">
          <img src={leftImage} alt="" className="home__left-image" />
          <NavLink to="/gallery" className="home__left-link">
            Visit Gallery
          </NavLink>
        </div>
        <div className="home__right-square">
          <img src={rightImage} alt="" className="home__right-image" />
          <NavLink to="/contact" className="home__right-link">
            Bespoke Enquiries
          </NavLink>
        </div>
      </section>
      {/* NEXT SECTION */}
      <section className="home__article" data-aos="fade-left">
        <div className="home__article-container">
          <p className="home__article-header">{lastHeadline}</p>
          <p className="home__article-subheader">{lastSubHeadline}</p>
          <p className="home__article-text">{lastText}</p>
          <p className="home__article-person">{lastSmallText}</p>
        </div>
      </section>
    </>
  );
};

export default Home;

// Convert to cards?
