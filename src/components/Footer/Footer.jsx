import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./footer.scss";
import facebookIcon from "../../assets/icons/facebook.png";
import instagramIcon from "../../assets/icons/instagram.png";
import youtubeIcon from "../../assets/icons/youtube.png";

const Footer = () => {
  return (
    <>
      <div className="footer__divider"></div>
      <footer className="footer">
        <div className="footer__socials">
          <Link to="https://www.facebook.com">
            <img
              src={facebookIcon}
              alt="facebook icon"
              className="footer__icon"
            />
          </Link>
          <Link to="https://www.instagram.com">
            <img
              src={instagramIcon}
              alt="instagram icon"
              className="footer__icon"
            />
          </Link>
          <Link to="https://www.youtube.com">
            <img
              src={youtubeIcon}
              alt="youtube icon"
              className="footer__icon"
            />
          </Link>
        </div>
        <div className="footer__address">
          Bowdens Registered Office, 2nd Floor Diamond Building, 100-102 Great
          Jewellery Street, London, W1 6QG
        </div>
        <NavLink
          to="/contact"
          className="footer__contact"
          // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
        >
          Contact Us
        </NavLink>
      </footer>
    </>
  );
};

export default Footer;
