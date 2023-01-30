import React from "react";

import styles from "./AboutMe.module.scss";
const AboutMeElement = ({ header, obj }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_header}>{header}</div>
      {obj.map((item, index) => (
        <div key={index}>
          <div className={styles.item_title}>
            {item.title} <br />
          </div>
          <div className={styles.item_text}>{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutMeElement;
