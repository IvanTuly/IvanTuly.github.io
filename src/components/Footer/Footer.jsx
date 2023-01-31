import React from "react";
import "boxicons";
import FooterItem from "./FooterItem";

const footerItems = [
  {
    icon: "github",
    link: "https://google.com",
    name: "github",
  },
  {
    icon: "linkedin",
    link: "https://google.com",
    name: "linkedin",
  },
  {
    icon: "whatsapp",
    link: "https://google.com",
    name: "whatsapp",
  },
  {
    icon: "telegram",
    link: "https://google.com",
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
