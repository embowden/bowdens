import React, { useRef, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./burger.scss";

const Burger = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
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
  );
};

export default Burger;
