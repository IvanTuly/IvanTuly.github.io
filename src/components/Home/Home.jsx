import React, { Suspense } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";

import styles from "./Home.module.scss";

import Title from "../Title";
import Loading from "../Loading/Loading";
import { useEffect } from "react";

const Home = () => {
  const [loading, setLoding] = React.useState(true);

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 350);
  });

  const onLoad = () => {
    setLoding(false);
    console.log(loading);
  };

  return (
    <>
      <Title title={"Hello, \n I'm Ivan"} />
      <motion.div
        style={{
          // backgroundImage: `url('${process.env.PUBLIC_URL}/img/backGround1.png')`,
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
        {loading === false ? "" : <Loading />}
        <div className={styles.homeWrapper}>
          <div className={styles.homeContent}>
            {mounted && (
              <Spline
                scene="https://prod.spline.design/mk-jhKI58ef9l8PQ/scene.splinecode"
                onLoad={onLoad}
              />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;

{
  /* <motion.div
className={styles.homepage}
style={{ x, y, rotateX, rotateY, z: 100 }}
//функция из framer motion активирует перетаскивание
drag
//насколько
dragElastic={0.16}
// ограничиваем чтобы карточка не могла перевернуться
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
    style={{ x, y, rotateX, rotateY, z: 500 }}
    className={`${styles.iconImg} ${styles.html}`}
    src={process.env.PUBLIC_URL + "/img/homePage/html.svg"}
    alt="css"
    draggable="false"
  />
  <motion.img
    style={{ x, y, rotateX, rotateY }}
    className={`${styles.iconImg} ${styles.firebase}`}
    src={process.env.PUBLIC_URL + "/img/homePage/firebase.svg"}
    alt="css"
    draggable="false"
  />
  <motion.img
    style={{ x, y, rotateX, rotateY }}
    className={`${styles.iconImg} ${styles.git}`}
    src={process.env.PUBLIC_URL + "/img/homePage/git.svg"}
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

<div>
  <img
    className={styles.macImg}
    src={process.env.PUBLIC_URL + "/img/homePage/mac.png"}
    alt="css"
    draggable="false"
  />
</div>

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
</motion.div> */
}
