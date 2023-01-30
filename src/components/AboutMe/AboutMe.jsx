import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";

import styles from "./AboutMe.module.scss";
import AboutMeElement from "./AboutMeElement";

const AboutMe = () => {
  const info = [
    {
      header: "Education",
      obj: [
        {
          title: ["Computer Science - B.Sc."],
          text: "The Bonch-Bruevich Saint Petersburg State University of Telecommunications, Information systems and technology",
        },
        {
          title: ["Computer Science - B.Sc."],
          text: "The Bonch-Bruevich Saint Petersburg State University of Telecommunications, Information systems and technology",
        },
      ],
    },
  ];

  return (
    <>
      <Title title={"About my experience"} />
      <motion.div
        className="pageinfo"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className={styles.items}>
          {info.map((obj, index) => (
            <AboutMeElement key={index} {...obj} />
          ))}
          <div className={styles.item}>
            <div className={styles.item_header}>Skills</div>
            <div className={styles.item_text}>
              HTML5, CSS (Sass), JavaScript (React, Redux, Flux), Rest APIs,
              Node JS, Databases (SQL)
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.item_header}>Expirience</div>
            <div className={styles.item_title}>
              Co-Founder, Developer <br /> Startup programix.pro - programing
              school for kids
            </div>
            <div className={styles.item_text}>
              Platform development (HTML,JS,CSS,PHP) <br /> SEO optimization
              <br /> Setup WooCommerce
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
