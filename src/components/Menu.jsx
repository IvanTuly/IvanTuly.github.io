import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__items">
        <Link to="/">
          <div className="menu__item menu__items-home menu-active">Home</div>
        </Link>
        <Link to="/about">
          <div className="menu__item menu__items-aboutMe">About me</div>
        </Link>
        <Link to="/skills">
          <div className="menu__item menu__items-aboutMe">My skills</div>
        </Link>
        <div className="menu__item menu__items-portfolio">Portfolio</div>
        <div className="menu__item menu__items-contacts">Contacts</div>
      </div>
    </div>
  );
};

export default Menu;
