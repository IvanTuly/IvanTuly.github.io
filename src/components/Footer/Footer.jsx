import React from "react";
import "boxicons";
import FooterItem from "./FooterItem";

const footerItems = [
  {
    icon: "github",
    link: "https://github.com/IvanTuly",
    name: "github",
  },
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ivan-tulchinskii-28bb8821b/",
    name: "linkedin",
  },
  {
    icon: "whatsapp",
    link: "https://wa.me/79112553010",
    name: "whatsapp",
  },
  {
    icon: "telegram",
    link: "https://t.me/+79956303010",
    name: "telegram",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        {footerItems.map((item, index) => (
          <FooterItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
