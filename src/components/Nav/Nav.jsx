import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
import bowdenLogo from "../../assets/logo/logo.png";

export const Nav = () => {
  return (
    <>
      <div className="navigation">
        <img src={bowdenLogo} alt="Bowdens Logo" className="navigation__logo" />
        <nav className="navigation__container">
          <div className="navigation__box">
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                isActive ? "navigation__link--active" : "navigation__link"
              }
            >
              Home
            </NavLink>
          </div>
          <div className="navigation__box">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "navigation__link--active" : "navigation__link"
              }
            >
              About Us
            </NavLink>
          </div>
          <div className="navigation__box">
            <NavLink
              to="gallery"
              className={({ isActive }) =>
                isActive ? "navigation__link--active" : "navigation__link"
              }
            >
              Gallery
            </NavLink>
          </div>
          <div className="navigation__box">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "navigation__link--active" : "navigation__link"
              }
            >
              Enquire
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
