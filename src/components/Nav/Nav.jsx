import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
import bowdenLogo from "../../assets/logo/logo.png";

export const Nav = () => {
  return (
    <>
      <div className="navigation">
        <img src={bowdenLogo} alt="Bowdens Logo" className="navigation__logo" />
        <div className="navigation__divider"></div>
        <nav className="navigation__container">
          <NavLink
            to="/"
            className="navigation__link"
            // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="navigation__link"
            // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/gallery"
            className="navigation__link"
            // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className="navigation__link"
            // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Nav;
