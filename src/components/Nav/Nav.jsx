import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div>LOGO</div>
      <nav>
        <NavLink
          to="/"
          // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/gallery"
          // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          // className={(isActive) => "nav__link" + (!isActive ? "" : "--active")}
        >
          Contact Us
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
