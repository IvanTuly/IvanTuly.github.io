import React from "react";
import { motion } from "framer-motion";
import Title from "../Title";

import styles from "./AboutMe.module.scss";
import AboutMeElement from "./AboutMeElement";
import { AppContext } from "../../App";

const AboutMe = () => {
  const { portfolioSkills } = React.useContext(AppContext);

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
          {portfolioSkills.map((obj, index) => (
            <AboutMeElement key={index} {...obj} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
