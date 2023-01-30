import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const navRef = React.useRef();

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

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

  if (width > breakpoint) {
    return (
      <>
        <div className="menu">
          <div ref={navRef} className="menu__items">
            {navigation.map((obj, index) => (
              <Link to={obj.link}>
                <div
                  className={
                    obj.name === active
                      ? "menu__item menu__items-home menu-active"
                      : "menu__item menu__items-home"
                  }
                  onClick={() => {
                    setActive(obj.name);
                    showNavbar();
                  }}
                >
                  {obj.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="menu">
        <div ref={navRef} className="menu__items">
          <img
            onClick={showNavbar}
            className="nav-btn nav-close-btn"
            width={32}
            height={32}
            src={process.env.PUBLIC_URL + "/img/icons/close.svg"}
            alt="close"
          />

          {navigation.map((obj, index) => (
            <Link to={obj.link}>
              <div
                className={
                  obj.name === active
                    ? "menu__item menu__items-home menu-active"
                    : "menu__item menu__items-home"
                }
                onClick={() => {
                  setActive(obj.name);
                  showNavbar();
                }}
              >
                {obj.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <img
        onClick={showNavbar}
        className="nav-btn"
        width={32}
        height={32}
        src={process.env.PUBLIC_URL + "/img/icons/menu.svg"}
        alt="menu"
      />

      <div className="mobile-menu-dots">
        {navigation.map((obj, index) => (
          <Link to={obj.link}>
            <div
              className={
                obj.name === active
                  ? "menu__item menu__items-home menu-active"
                  : "menu__item menu__items-home"
              }
              onClick={() => {
                setActive(obj.name);
              }}
            >
              •
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
