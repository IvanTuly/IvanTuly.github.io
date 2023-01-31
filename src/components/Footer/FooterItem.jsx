import React from "react";
import "boxicons";

const FooterItem = ({ icon, link, name }) => {
  return (
    <div className="footer__item">
      <box-icon type="logo" color="#ffffff" size="2.4vw" name={icon}></box-icon>
      {/* <p>{name}</p> */}
    </div>
  );
};

export default FooterItem;
