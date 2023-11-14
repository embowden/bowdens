import React from "react";
import { NavLink } from "react-router-dom";
import "./logoTop.scss";
import bowdenLogo from "../../assets/logo/Diamonds-FR-crop.png";

export const LogoTop = () => {
  return (
    <>
      <div className="logoTop">
        <NavLink to="/" className="logoTop__link">
          <img src={bowdenLogo} alt="Bowdens Logo" className="logoTop__logo" />
        </NavLink>
      </div>
    </>
  );
};

export default LogoTop;
