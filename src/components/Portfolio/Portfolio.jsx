import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Title from "../Title";
import BtnSlider from "./Slider/BtnSlider";
import Counter from "./Counter";
import styles from "./Portfolio.module.scss";

const works = [
  {
    titleImg: "/img/pizzaDelivery/title.svg",
    projectImg: "/img/pizzaDelivery/mac.png",
    backgroundImage: "/img/pizzaDelivery/background.png",
    techStack: [
      "ReactJS",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "React Content Loader",
      "React Pagination",
      "Lodash.Debounce",
      "Sass",
    ],
  },
  {
    titleImg: "/img/reactSneakers/title.svg",
    projectImg: "/img/reactSneakers/mac.png",
    backgroundImage: "/img/reactSneakers/background2.png",
    techStack: [
      "ReactJS",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "React Content Loader",
      "css-modules",
    ],
  },
  {
    titleImg: "/img/taskList/title.svg",
    projectImg: "/img/taskList/mac.png",
    backgroundImage: "/img/taskList/background.svg",
    techStack: [
      "Vanilla JS",
      "Scss",
      "Drag & Drop ",
      "Firebase RealTime",
      "Firebase Auth",
    ],
  },
];

const variants = {
  initial: (direction) => {
    return {
      opacity: 0,
      x: direction > 0 ? 200 : -200,
    };
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => {
    return {
      opacity: 0,
      x: direction > 0 ? -200 : 200,
    };
  },
  transition: {
    type: "tween",
    duration: 0.5,
    ease: "easeOut",
  },
};

const Portfolio = () => {
  //slider Index
  const [slideIndex, setSlideIndex] = React.useState(1);
  //slider direction
  const [direction, setDirection] = React.useState(0);

  const nextSlide = () => {
    //1-next step
    setDirection(1);
    slideIndex !== works.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(1);
  };

  const prevSlide = () => {
    //-1 - prev step
    setDirection(-1);
    slideIndex !== 1
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(works.length);
  };

  return (
    <>
      <Title title={"My, works"} />
      <motion.div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + works[slideIndex - 1].backgroundImage
          })`,
          backgroundSize: "cover",
          overflow: "hidden",
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
        <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
          <motion.div
            className={styles.portfolioCard}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            custom={direction}
            key={works[slideIndex - 1].img}
          >
            <img
              className={styles.imageTitle}
              src={process.env.PUBLIC_URL + works[slideIndex - 1].titleImg}
              alt="Project title"
            />
            <div className={styles.subTitle}>Tech Stack:</div>
            <div className={styles.techStack}>
              {works[slideIndex - 1].techStack.map((item) => (
                <div className={styles.techStackItem}>{item}</div>
              ))}
            </div>
            <img
              className={styles.imageMac}
              src={process.env.PUBLIC_URL + works[slideIndex - 1].projectImg}
              alt="Project image"
            />
          </motion.div>
        </AnimatePresence>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <Counter currentPage={slideIndex} totalPages={works.length} />
      </motion.div>
    </>
  );
};

export default Portfolio;
