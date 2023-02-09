import React from "react";
import "boxicons";

const FooterItem = ({ icon, link, name }) => {
  return (
    <div className="footer__item">
      <a href={link} target="_blank" className="footer__link">
        <box-icon
          className="footer__icon"
          type="logo"
          color="#ffffff"
          name={icon}
        ></box-icon>
      </a>
    </div>
  );
};

export default FooterItem;
