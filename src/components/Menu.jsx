import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const navRef = React.useRef();
  //выделение активного пункта меню
  const [active, setActive] = React.useState("Home");
  //навигация
  const navigation = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About me",
      link: "/about",
    },
    {
      name: "My skills",
      link: "/skills",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contacts",
      link: "/contacts",
    },
  ];

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="menu">
        <div ref={navRef} className="menu__items">
          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            close
          </button>
          {navigation.map((obj, index) => (
            <Link to={obj.link}>
              <div
                className={
                  obj.name === active
                    ? "menu__item menu__items-home menu-active"
                    : "menu__item menu__items-home"
                }
                onClick={() => setActive(obj.name)}
              >
                {obj.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button onClick={showNavbar} className="nav-btn ">
        open
      </button>
    </>
  );
};

export default Menu;
