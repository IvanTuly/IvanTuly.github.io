import React from "react";

import styles from "./AboutMe.module.scss";
const AboutMeElement = ({}) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_header}>Education</div>
      <div className={styles.item_title}>
        Computer Science - B.Sc. <br />
      </div>
      <div className={styles.item_text}>
        The Bonch-Bruevich Saint Petersburg State University of
        Telecommunications, Information systems and technology
      </div>
    </div>
  );
};

export default AboutMeElement;
