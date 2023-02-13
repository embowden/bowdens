import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./burger.scss";
import bowdenLogo from "../../assets/logo/logo.png";

const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  const setWidth = () => {
    if (window.innerWidth >= 1280) {
      return 300;
    } else if (window.innerWidth >= 768) {
      return 250;
    } else if (window.innerWidth <= 767) {
      return 180;
    }
  };

  return (
    <>
      <Menu
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
        width={setWidth()}
      >
        <img src={bowdenLogo} alt="Bowdens Logo" className="bm-logo" />
        <NavLink end to="/" className="menu-item" onClick={closeSideBar}>
          Home
        </NavLink>
        <NavLink to="about" className="menu-item" onClick={closeSideBar}>
          About Us
        </NavLink>
        <NavLink to="gallery" className="menu-item" onClick={closeSideBar}>
          Gallery
        </NavLink>
        <NavLink to="contact" className="menu-item" onClick={closeSideBar}>
          Enquire
        </NavLink>
      </Menu>
    </>
  );
};

export default Burger;
