import React from "react";
import "./logoTop.scss";
import bowdenLogo from "../../assets/logo/logo.png";

export const LogoTop = () => {
  return (
    <>
      <a className="logoTop">
        <img src={bowdenLogo} alt="Bowdens Logo" className="logoTop__logo" />
      </a>
    </>
  );
};

export default LogoTop;
