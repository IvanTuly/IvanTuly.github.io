import React from "react";

import styles from "./AboutMe.module.scss";

const AboutMeElement = ({ header, obj }) => {
  const skills = () => {
    return obj.map((item, index) => (
      <div key={index}>
        <div className={styles.item_title}>
          {item.title} <br />
        </div>
        <div className={styles.item_text}>
          {item.text.split(",").map((val, index) => (
            <div key={index} className={styles.listItem}>
              {val}
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const base = () => {
    return obj.map((item, index) => (
      <div key={index}>
        <div className={styles.item_title}>{item.title}</div>
        {item.subtitle && (
          <div className={styles.item_subtitle}>{item.subtitle}</div>
        )}
        <div className={styles.item_text}>{item.text}</div>
      </div>
    ));
  };

  return (
    <div className={styles.item}>
      <div className={styles.item_header}>{header}</div>
      {header.toLowerCase() === "skills" ? skills() : base()}
    </div>
  );
};

export default AboutMeElement;
