import React from "react";
import "./logoTop.scss";
import bowdenLogo from "../../assets/logo/logo.png";

export const LogoTop = () => {
  return (
    <>
      <div className="logoTop">
        <img src={bowdenLogo} alt="Bowdens Logo" className="logoTop__logo" />
      </div>
    </>
  );
};

export default LogoTop;
