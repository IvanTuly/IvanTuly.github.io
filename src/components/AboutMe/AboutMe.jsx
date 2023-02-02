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
          title: "Computer Science - B.Sc.",
          text: "The Bonch-Bruevich Saint Petersburg State University of Telecommunications, Information systems and technology",
        },
      ],
    },
    {
      header: "Skills",
      obj: [
        {
          title: "Web",
          text: " HTML5, CSS (Sass), JavaScript (React, Redux, Flux), Rest APIs, Node JS, Databases (SQL)",
        },
      ],
    },
    {
      header: "Expirience",
      obj: [
        {
          title:
            "Co-Founder, Developer \n Startup programix.pro - programing school for kids",
          text: "Platform development (HTML,JS,CSS,PHP) SEO optimization Setup WooCommerce",
        },
        {
          title: "Web developer at sun arch dance school",
          text: "Website support, adding new pages, SEO optimization",
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
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className={styles.items}>
          {info.map((obj, index) => (
            <AboutMeElement key={index} {...obj} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
