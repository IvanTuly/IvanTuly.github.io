import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import styles from "./Home.module.scss";

import Title from "../Title";

const Home = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [30, -30]);
  const rotateY = useTransform(x, [-150, 150], [-30, 30]);

  const rotateMacX = useTransform(y, [-100, 10], [30, -30]);
  const rotateMacY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <>
      <Title title={"Hello, \n I'm Ivan"} />
      <motion.div
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/img/backGround1.png')`,
          overflow: "visible",
        }}
        className="pageinfo"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <motion.div
          className={styles.homepage}
          style={{ x, y, rotateX, rotateY, z: 10, perspective: 10 }}
          drag
          dragElastic={0.1}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className={styles.iconsContainer}>
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 1000 }}
              className={`${styles.iconImg} ${styles.css}`}
              src={process.env.PUBLIC_URL + "/img/homePage/css.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 30000 }}
              className={`${styles.iconImg} ${styles.firebase}`}
              src={process.env.PUBLIC_URL + "/img/homePage/firebase.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 10000 }}
              className={`${styles.iconImg} ${styles.git}`}
              src={process.env.PUBLIC_URL + "/img/homePage/git.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 10000 }}
              className={`${styles.iconImg} ${styles.html}`}
              src={process.env.PUBLIC_URL + "/img/homePage/html.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 800000 }}
              className={`${styles.iconImg} ${styles.js}`}
              src={process.env.PUBLIC_URL + "/img/homePage/js.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 20000 }}
              className={`${styles.iconImg} ${styles.lodash}`}
              src={process.env.PUBLIC_URL + "/img/homePage/lodash.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 40000 }}
              className={`${styles.iconImg} ${styles.node}`}
              src={process.env.PUBLIC_URL + "/img/homePage/node.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 150000 }}
              className={`${styles.iconImg} ${styles.react}`}
              src={process.env.PUBLIC_URL + "/img/homePage/react.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 10000 }}
              className={`${styles.iconImg} ${styles.restApi}`}
              src={process.env.PUBLIC_URL + "/img/homePage/restApi.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 50000 }}
              className={`${styles.iconImg} ${styles.sass}`}
              src={process.env.PUBLIC_URL + "/img/homePage/sass.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 100000 }}
              className={`${styles.iconImg} ${styles.ts}`}
              src={process.env.PUBLIC_URL + "/img/homePage/ts.svg"}
              alt="css"
              draggable="false"
            />
            <motion.img
              style={{ x, y, rotateX, rotateY, z: 30000 }}
              className={`${styles.iconImg} ${styles.redux}`}
              src={process.env.PUBLIC_URL + "/img/homePage/redux.svg"}
              alt="css"
              draggable="false"
            />
          </div>

          <img
            className={styles.macImg}
            src={process.env.PUBLIC_URL + "/img/homePage/mac.png"}
            alt="css"
            draggable="false"
          />
          <div className={styles.typingAnimation}>
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "And I'm Frontend Developer",
                2000,
                "And I'm React Developer",
                2000,
              ]}
              speed={70} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "2vw" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
